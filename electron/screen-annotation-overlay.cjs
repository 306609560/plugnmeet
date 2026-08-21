const path = require('path');
const { spawn } = require('child_process');
const { BrowserWindow, ipcMain, screen } = require('electron');

const MAX_REQUEST_SIZE = 8 * 1024 * 1024;
const SUPPORTED_PLATFORMS = new Set(['win32', 'darwin']);

let captureSource = null;
let overlayWindow = null;
let activeShareId = '';
let activeSessionId = '';
let overlayReady = null;
let overlayOrigin = '';
let rendererReady = false;
let pendingElements = [];
let pendingConfiguration = null;
let overlayInteractive = false;
let overlayVisibleForSource = true;
let overlayInputMode = 'draw';
let toolbarHovered = false;
let windowBoundsTracker = null;
let windowBounds = null;
const eventStreams = new Set();

const INPUT_CHANNEL = 'screen-annotation:input';
const READY_CHANNEL = 'screen-annotation:ready';
const WINDOW_TRACK_INTERVAL_MS = 100;

function setScreenAnnotationOverlayOrigin(origin) {
  overlayOrigin = typeof origin === 'string' ? origin.replace(/\/$/, '') : '';
}

function setScreenAnnotationCaptureSource(source) {
  captureSource = source
    ? {
        id: source.id,
        displayId: source.display_id || '',
        name: source.name || '',
      }
    : null;

  if (!captureSource) {
    stopScreenAnnotationOverlay();
  }
}

function getCaptureType() {
  if (captureSource?.id.startsWith('screen:')) {
    return 'screen';
  }
  if (captureSource?.id.startsWith('window:')) {
    return 'window';
  }
  return '';
}

function getCaptureDisplay() {
  const displays = screen.getAllDisplays();
  const displayId = String(captureSource?.displayId || '');
  return (
    displays.find((display) => String(display.id) === displayId) ||
    screen.getPrimaryDisplay()
  );
}

function parseWindowsWindowHandle(sourceId) {
  const value = sourceId.split(':')[1] || '';
  if (/^\d+$/.test(value)) {
    return value;
  }
  if (/^(?:0x)?[0-9a-f]+$/i.test(value)) {
    return BigInt(value.startsWith('0x') ? value : `0x${value}`).toString(10);
  }
  return '';
}

function createWindowsBoundsTrackerScript(windowHandle) {
  return `
Add-Type @'
using System;
using System.Runtime.InteropServices;

public static class UniccmeetWindowTracker {
  [StructLayout(LayoutKind.Sequential)]
  public struct RECT {
    public int Left;
    public int Top;
    public int Right;
    public int Bottom;
  }

  [DllImport("user32.dll")]
  public static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);

  [DllImport("user32.dll")]
  public static extern bool IsWindow(IntPtr hWnd);

  [DllImport("user32.dll")]
  public static extern bool IsWindowVisible(IntPtr hWnd);

  [DllImport("user32.dll")]
  public static extern bool IsIconic(IntPtr hWnd);

  [DllImport("user32.dll")]
  public static extern IntPtr GetForegroundWindow();

  [DllImport("user32.dll")]
  public static extern IntPtr GetAncestor(IntPtr hWnd, uint flags);

  [DllImport("dwmapi.dll")]
  public static extern int DwmGetWindowAttribute(
    IntPtr hWnd,
    int attribute,
    out RECT value,
    int size
  );
}
'@

$target = [IntPtr]::new([Int64]${windowHandle})
$rectSize = [Runtime.InteropServices.Marshal]::SizeOf([type][UniccmeetWindowTracker+RECT])
while ([UniccmeetWindowTracker]::IsWindow($target)) {
  $rect = [UniccmeetWindowTracker+RECT]::new()
  $dwmResult = [UniccmeetWindowTracker]::DwmGetWindowAttribute($target, 9, [ref]$rect, $rectSize)
  if ($dwmResult -ne 0) {
    [void][UniccmeetWindowTracker]::GetWindowRect($target, [ref]$rect)
  }
  $foreground = [UniccmeetWindowTracker]::GetForegroundWindow()
  $foregroundRoot = [UniccmeetWindowTracker]::GetAncestor($foreground, 3)
  $active = $foreground -eq $target -or $foregroundRoot -eq $target
  $visible = [UniccmeetWindowTracker]::IsWindowVisible($target) -and -not [UniccmeetWindowTracker]::IsIconic($target)
  [Console]::WriteLine("bounds|{0}|{1}|{2}|{3}|{4}|{5}", $rect.Left, $rect.Top, $rect.Right - $rect.Left, $rect.Bottom - $rect.Top, [int]$visible, [int]$active)
  [Console]::Out.Flush()
  Start-Sleep -Milliseconds ${WINDOW_TRACK_INTERVAL_MS}
}
[Console]::WriteLine("closed")
[Console]::Out.Flush()
`;
}

function stopWindowBoundsTracker() {
  if (windowBoundsTracker && !windowBoundsTracker.killed) {
    windowBoundsTracker.kill();
  }
  windowBoundsTracker = null;
  windowBounds = null;
}

function applyTrackedWindowState(state) {
  windowBounds = screen.screenToDipRect(null, state.bounds);
  overlayVisibleForSource = state.visible && state.active;
  updateOverlayBounds();
  updateOverlayVisibility();
}

function startWindowBoundsTracker() {
  stopWindowBoundsTracker();
  const windowHandle = parseWindowsWindowHandle(captureSource?.id || '');
  if (process.platform !== 'win32' || !windowHandle) {
    return Promise.resolve(false);
  }

  const encodedScript = Buffer.from(
    createWindowsBoundsTrackerScript(windowHandle),
    'utf16le',
  ).toString('base64');

  return new Promise((resolve) => {
    let settled = false;
    let stdout = '';
    const tracker = spawn(
      'powershell.exe',
      [
        '-NoLogo',
        '-NoProfile',
        '-NonInteractive',
        '-ExecutionPolicy',
        'Bypass',
        '-EncodedCommand',
        encodedScript,
      ],
      { windowsHide: true },
    );
    windowBoundsTracker = tracker;

    const finishStart = (result) => {
      if (!settled) {
        settled = true;
        resolve(result);
      }
    };

    tracker.stdout.setEncoding('utf8');
    tracker.stdout.on('data', (chunk) => {
      stdout += chunk;
      const lines = stdout.split(/\r?\n/);
      stdout = lines.pop() || '';
      for (const line of lines) {
        const parts = line.trim().split('|');
        if (parts[0] === 'closed') {
          finishStart(false);
          stopScreenAnnotationOverlay();
          return;
        }
        if (parts[0] !== 'bounds' || parts.length !== 7) {
          continue;
        }
        const [x, y, width, height] = parts.slice(1, 5).map(Number);
        if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) {
          continue;
        }
        applyTrackedWindowState({
          bounds: { x, y, width, height },
          visible: parts[5] === '1',
          active: parts[6] === '1',
        });
        finishStart(true);
      }
    });
    tracker.on('error', (error) => {
      console.error('[screen-annotation] window tracker failed:', error);
      finishStart(false);
    });
    tracker.on('exit', () => {
      if (windowBoundsTracker === tracker) {
        windowBoundsTracker = null;
      }
      finishStart(false);
    });
    setTimeout(() => finishStart(false), 3000);
  });
}

// Kept temporarily as a packaged-build fallback while the dedicated page rolls out.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createOverlayHtml() {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'none'; img-src data:; script-src 'unsafe-inline'; style-src 'unsafe-inline'"
    />
    <style>
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: hidden;
        background: transparent;
        user-select: none;
      }

      #annotation {
        display: none;
        width: 100%;
        height: 100%;
        object-fit: fill;
        pointer-events: none;
      }

      #drawing {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: none;
        cursor: crosshair;
        touch-action: none;
      }

      #preview {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        display: none;
        pointer-events: none;
      }

      body.interactive #drawing,
      body.interactive #preview {
        display: block;
      }

      body.tool-mouse #drawing {
        pointer-events: none;
        cursor: default;
      }

      body.tool-text #drawing {
        cursor: text;
      }

      body.tool-eraser #drawing {
        cursor: cell;
      }

      #toolbar {
        position: fixed;
        top: 18px;
        left: 50%;
        z-index: 2;
        display: none;
        align-items: center;
        gap: 2px;
        padding: 5px 7px;
        color: #374151;
        font: 12px/1.2 system-ui, -apple-system, sans-serif;
        background: rgba(255, 255, 255, 0.97);
        border: 1px solid rgba(148, 163, 184, 0.35);
        border-radius: 9px;
        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.24);
        transform: translateX(-50%);
      }

      body.interactive #toolbar {
        display: flex;
      }

      #toolbar button {
        width: 34px;
        min-width: 34px;
        height: 34px;
        padding: 4px;
        color: #4b5563;
        background: transparent;
        border: 0;
        border-radius: 7px;
        cursor: pointer;
      }

      #toolbar button:hover,
      #toolbar button.active {
        color: #2563eb;
        background: #eff6ff;
      }

      #toolbar button:disabled {
        color: #cbd5e1;
        cursor: default;
      }

      .tool-icon {
        display: block;
        min-height: 22px;
        font-size: 19px;
        line-height: 24px;
      }

      [data-label] {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
      }

      .separator {
        width: 1px;
        height: 34px;
        margin: 0 3px;
        background: #e2e8f0;
      }

      .setting {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
        min-width: 34px;
      }

      .setting input {
        width: 28px;
        height: 24px;
        padding: 0;
        background: transparent;
        border: 0;
        cursor: pointer;
      }

      .setting select {
        width: 38px;
        height: 24px;
        color: #374151;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 5px;
      }

      #actions {
        position: fixed;
        top: 18px;
        right: 18px;
        z-index: 2;
        display: none;
        align-items: center;
        gap: 6px;
        padding: 5px;
        background: rgba(255, 255, 255, 0.97);
        border: 1px solid rgba(148, 163, 184, 0.35);
        border-radius: 8px;
        box-shadow: 0 8px 28px rgba(15, 23, 42, 0.2);
      }

      body.interactive #actions {
        display: flex;
      }

      #actions button {
        height: 34px;
        padding: 0 12px;
        color: #374151;
        background: #fff;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        cursor: pointer;
      }

      #actions button:hover {
        color: #2563eb;
        background: #eff6ff;
      }

      #stop {
        width: 34px;
        padding: 0 !important;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <img id="annotation" alt="" draggable="false" />
    <canvas id="drawing"></canvas>
    <canvas id="preview"></canvas>
    <div id="toolbar" role="toolbar">
      <button data-tool="mouse" title="Mouse" type="button"><span class="tool-icon">↖</span><span data-label="mouse">Mouse</span></button>
      <button data-tool="pen" title="Pen" type="button"><span class="tool-icon">✎</span><span data-label="pen">Pen</span></button>
      <button data-tool="highlighter" title="Highlight" type="button"><span class="tool-icon">▰</span><span data-label="highlighter">Highlight</span></button>
      <button data-tool="text" title="Text" type="button"><span class="tool-icon">T</span><span data-label="text">Text</span></button>
      <button data-tool="rectangle" title="Rectangle" type="button"><span class="tool-icon">□</span><span data-label="rectangle">Rectangle</span></button>
      <button data-tool="ellipse" title="Ellipse" type="button"><span class="tool-icon">○</span><span data-label="ellipse">Ellipse</span></button>
      <button data-tool="arrow" title="Arrow" type="button"><span class="tool-icon">➜</span><span data-label="arrow">Arrow</span></button>
      <button data-tool="eraser" title="Eraser" type="button"><span class="tool-icon">◇</span><span data-label="eraser">Eraser</span></button>
      <span class="separator"></span>
      <button data-command="undo" title="Undo" type="button"><span class="tool-icon">↶</span><span data-label="undo">Undo</span></button>
      <button data-command="redo" title="Redo" type="button"><span class="tool-icon">↷</span><span data-label="redo">Redo</span></button>
      <span class="separator"></span>
      <label class="setting" title="Color"><input id="color" type="color" value="#e03131" /><span data-label="color">Color</span></label>
      <label class="setting" title="Width"><select id="width"><option value="2">S</option><option value="3" selected>M</option><option value="5">L</option></select><span data-label="width">Width</span></label>
    </div>
    <div id="actions">
      <button id="clear" type="button">Clear annotations</button>
      <button id="stop" title="Esc" type="button">×</button>
    </div>
    <script>
      const drawing = document.getElementById('drawing');
      const context = drawing.getContext('2d');
      const preview = document.getElementById('preview');
      const previewContext = preview.getContext('2d');
      const toolbar = document.getElementById('toolbar');
      const actions = document.getElementById('actions');
      const colorInput = document.getElementById('color');
      const widthInput = document.getElementById('width');
      let activeGesture = null;
      let activeTool = 'pen';
      let toolbarHover = false;
      let drawingRevision = 0;
      let interaction = {
        color: '#e03131',
        strokeWidth: 3,
        labels: {},
      };

      const resizeDrawing = () => {
        const ratio = window.devicePixelRatio || 1;
        for (const canvas of [drawing, preview]) {
          canvas.width = Math.max(1, Math.round(window.innerWidth * ratio));
          canvas.height = Math.max(1, Math.round(window.innerHeight * ratio));
          const canvasContext = canvas.getContext('2d');
          canvasContext.setTransform(ratio, 0, 0, ratio, 0, 0);
          canvasContext.lineCap = 'round';
          canvasContext.lineJoin = 'round';
        }
      };

      const clearDrawing = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        previewContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
      };

      const normalizedPoint = (event) => ({
        x: Math.max(0, Math.min(1, event.clientX / window.innerWidth)),
        y: Math.max(0, Math.min(1, event.clientY / window.innerHeight)),
      });

      const pointToPixels = (point) => ({
        x: point.x * window.innerWidth,
        y: point.y * window.innerHeight,
      });

      const toolStyle = () => ({
        color: activeTool === 'highlighter' ? '#ffd43b' : colorInput.value,
        strokeWidth: activeTool === 'highlighter'
          ? Math.max(14, Number(widthInput.value) * 5)
          : Number(widthInput.value),
        opacity: activeTool === 'highlighter' ? 35 : 100,
      });

      const applyStyle = (canvasContext, style) => {
        canvasContext.strokeStyle = style.color;
        canvasContext.lineWidth = style.strokeWidth;
        canvasContext.globalAlpha = style.opacity / 100;
      };

      const drawSegment = (canvasContext, from, to, style) => {
        const start = pointToPixels(from);
        const end = pointToPixels(to);
        applyStyle(canvasContext, style);
        canvasContext.beginPath();
        canvasContext.moveTo(start.x, start.y);
        canvasContext.lineTo(end.x, end.y);
        canvasContext.stroke();
        canvasContext.globalAlpha = 1;
      };

      const drawShapePreview = (gesture) => {
        previewContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        const start = pointToPixels(gesture.start);
        const end = pointToPixels(gesture.last);
        const width = end.x - start.x;
        const height = end.y - start.y;
        applyStyle(previewContext, gesture.style);
        previewContext.beginPath();
        if (activeTool === 'rectangle') {
          previewContext.rect(start.x, start.y, width, height);
        } else if (activeTool === 'ellipse') {
          previewContext.ellipse(
            start.x + width / 2,
            start.y + height / 2,
            Math.abs(width / 2),
            Math.abs(height / 2),
            0,
            0,
            Math.PI * 2,
          );
        } else {
          previewContext.moveTo(start.x, start.y);
          previewContext.lineTo(end.x, end.y);
        }
        previewContext.stroke();
        previewContext.globalAlpha = 1;
      };

      drawing.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 || activeTool === 'mouse') return;
        const point = normalizedPoint(event);
        if (activeTool === 'text') {
          const text = window.prompt(interaction.labels.textPrompt || 'Enter text');
          if (text) {
            window.uniccmeetScreenAnnotation.emit({
              type: 'text',
              id: crypto.randomUUID(),
              point,
              text,
              color: colorInput.value,
            });
          }
          return;
        }
        activeGesture = {
          id: crypto.randomUUID(),
          start: point,
          last: point,
          points: [point],
          style: toolStyle(),
        };
        drawing.setPointerCapture(event.pointerId);
        event.preventDefault();
      });

      drawing.addEventListener('pointermove', (event) => {
        if (!activeGesture) return;
        const point = normalizedPoint(event);
        const previous = activeGesture.points[activeGesture.points.length - 1];
        if (Math.hypot(point.x - previous.x, point.y - previous.y) < 0.0005) {
          return;
        }
        activeGesture.points.push(point);
        activeGesture.last = point;
        if (activeTool === 'pen' || activeTool === 'highlighter') {
          drawSegment(context, previous, point, activeGesture.style);
        } else if (activeTool === 'eraser') {
          drawSegment(previewContext, previous, point, {
            color: '#64748b',
            strokeWidth: Math.max(12, activeGesture.style.strokeWidth * 4),
            opacity: 40,
          });
        } else {
          drawShapePreview(activeGesture);
        }
      });

      const finishGesture = (event) => {
        if (!activeGesture) return;
        if (activeGesture.points.length === 1) {
          const point = activeGesture.points[0];
          const offset = 1 / Math.max(window.innerWidth, window.innerHeight);
          activeGesture.points.push({
            x: Math.min(1, point.x + offset),
            y: Math.min(1, point.y + offset),
          });
          activeGesture.last = activeGesture.points[1];
        }
        if (activeTool === 'pen' || activeTool === 'highlighter') {
          drawingRevision += 1;
          window.uniccmeetScreenAnnotation.emit({
            type: 'stroke',
            tool: activeTool,
            id: activeGesture.id,
            points: activeGesture.points,
            ...activeGesture.style,
          });
        } else if (activeTool === 'eraser') {
          window.uniccmeetScreenAnnotation.emit({
            type: 'erase',
            points: activeGesture.points,
            size:
              Math.max(12, activeGesture.style.strokeWidth * 4) /
              Math.max(1, Math.min(window.innerWidth, window.innerHeight)),
          });
          previewContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        } else {
          window.uniccmeetScreenAnnotation.emit({
            type: 'shape',
            id: activeGesture.id,
            shape: activeTool,
            start: activeGesture.start,
            end: activeGesture.last,
            ...activeGesture.style,
          });
          previewContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
        activeGesture = null;
        if (event && drawing.hasPointerCapture(event.pointerId)) {
          drawing.releasePointerCapture(event.pointerId);
        }
      };

      const setTool = (tool) => {
        activeTool = tool;
        document.body.className = document.body.className
          .replace(/tool-[a-z]+/g, '')
          .trim();
        document.body.classList.add('tool-' + tool);
        for (const button of toolbar.querySelectorAll('[data-tool]')) {
          button.classList.toggle('active', button.dataset.tool === tool);
        }
        window.uniccmeetScreenAnnotation.emit({
          type: 'input-mode',
          mode: tool === 'mouse' ? 'mouse' : 'draw',
        });
      };

      drawing.addEventListener('pointerup', finishGesture);
      drawing.addEventListener('pointercancel', finishGesture);
      window.addEventListener('resize', resizeDrawing);
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          window.uniccmeetScreenAnnotation.emit({ type: 'stop' });
        } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
          window.uniccmeetScreenAnnotation.emit({
            type: event.shiftKey ? 'redo' : 'undo',
          });
        }
      });

      toolbar.addEventListener('click', (event) => {
        const toolButton = event.target.closest('[data-tool]');
        if (toolButton) {
          setTool(toolButton.dataset.tool);
          return;
        }
        const commandButton = event.target.closest('[data-command]');
        if (commandButton) {
          if (commandButton.dataset.command === 'clear') clearDrawing();
          window.uniccmeetScreenAnnotation.emit({
            type: commandButton.dataset.command,
          });
        }
      });
      document.getElementById('stop').addEventListener('click', () => {
        window.uniccmeetScreenAnnotation.emit({ type: 'stop' });
      });
      document.getElementById('clear').addEventListener('click', () => {
        clearDrawing();
        window.uniccmeetScreenAnnotation.emit({ type: 'clear' });
      });

      document.addEventListener('mousemove', (event) => {
        if (activeTool !== 'mouse') return;
        const toolbarRect = toolbar.getBoundingClientRect();
        const actionsRect = actions.getBoundingClientRect();
        const within = (rect) =>
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;
        const hovering = within(toolbarRect) || within(actionsRect);
        if (hovering !== toolbarHover) {
          toolbarHover = hovering;
          window.uniccmeetScreenAnnotation.emit({
            type: 'toolbar-hover',
            hovering,
          });
        }
      });

      window.setScreenAnnotationSvg = (base64) => {
        const image = document.getElementById('annotation');
        if (!base64) {
          image.removeAttribute('src');
          image.style.display = 'none';
          return;
        }
        const revisionAtRequest = drawingRevision;
        image.onload = () => {
          if (!activeGesture && revisionAtRequest === drawingRevision) {
            clearDrawing();
          }
        };
        image.src = 'data:image/svg+xml;base64,' + base64;
        image.style.display = 'block';
      };

      window.setScreenAnnotationInteraction = (config) => {
        interaction = { ...interaction, ...config };
        colorInput.value = interaction.color;
        widthInput.value = String(interaction.strokeWidth);
        for (const label of document.querySelectorAll('[data-label]')) {
          const translated = interaction.labels[label.dataset.label];
          if (translated) {
            label.textContent = translated;
            const titled = label.closest('[title]');
            if (titled) titled.title = translated;
          }
        }
        document.getElementById('clear').textContent =
          interaction.labels.clear || 'Clear annotations';
        document.body.classList.toggle('interactive', Boolean(config.enabled));
        if (config.enabled) {
          setTool(config.tool || 'pen');
        } else {
          activeGesture = null;
        }
      };

      resizeDrawing();
    </script>
  </body>
</html>`;
}

function updateOverlayBounds() {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    return;
  }
  const bounds = getCaptureType() === 'window' ? windowBounds : getCaptureDisplay().bounds;
  if (bounds) {
    overlayWindow.setBounds(bounds, false);
  }
}

function updateOverlayVisibility() {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    return;
  }
  if (overlayInteractive || overlayVisibleForSource) {
    if (!overlayWindow.isVisible()) {
      overlayWindow.showInactive();
    }
  } else if (overlayWindow.isVisible()) {
    overlayWindow.hide();
  }
}

function updateOverlayMouseBehavior() {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    return;
  }
  const ignoreMouse =
    !overlayInteractive || (overlayInputMode === 'mouse' && !toolbarHovered);
  overlayWindow.setIgnoreMouseEvents(ignoreMouse, { forward: true });
}

async function createOverlayWindow() {
  const initialBounds =
    getCaptureType() === 'window' && windowBounds
      ? windowBounds
      : getCaptureDisplay().bounds;
  overlayWindow = new BrowserWindow({
    ...initialBounds,
    backgroundColor: '#00000000',
    enableLargerThanScreen: true,
    focusable: false,
    frame: false,
    fullscreenable: false,
    hasShadow: false,
    maximizable: false,
    minimizable: false,
    movable: false,
    resizable: false,
    show: false,
    skipTaskbar: true,
    transparent: true,
    type: process.platform === 'darwin' ? 'panel' : undefined,
    webPreferences: {
      backgroundThrottling: false,
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'screen-annotation-preload.cjs'),
      sandbox: true,
    },
  });

  overlayWindow.setAlwaysOnTop(true, 'screen-saver');
  overlayWindow.setContentProtection(true);
  updateOverlayMouseBehavior();
  if (process.platform === 'darwin') {
    overlayWindow.setVisibleOnAllWorkspaces(true, {
      visibleOnFullScreen: true,
    });
  }

  overlayWindow.on('closed', () => {
    screen.removeListener('display-metrics-changed', updateOverlayBounds);
    overlayWindow = null;
    overlayReady = null;
    rendererReady = false;
    activeShareId = '';
    activeSessionId = '';
    pendingElements = [];
    pendingConfiguration = null;
    overlayInteractive = false;
  });

  if (!overlayOrigin) {
    throw new Error('screen annotation overlay origin is not configured');
  }
  rendererReady = false;
  overlayReady = overlayWindow.loadURL(
    `${overlayOrigin}/meet/screen-annotation-overlay.html`,
  );
  await overlayReady;
  updateOverlayVisibility();
  screen.on('display-metrics-changed', updateOverlayBounds);
}

async function startScreenAnnotationOverlay(shareId, sessionId) {
  if (!SUPPORTED_PLATFORMS.has(process.platform)) {
    return { active: false, reason: 'unsupported-platform' };
  }
  const captureType = getCaptureType();
  if (!captureType) {
    stopScreenAnnotationOverlay();
    return { active: false, reason: 'unsupported-capture-source' };
  }
  if (captureType === 'window' && process.platform !== 'win32') {
    stopScreenAnnotationOverlay();
    return { active: false, reason: 'window-overlay-unsupported' };
  }
  if (!shareId || !sessionId) {
    return { active: false, reason: 'missing-session-identity' };
  }

  if (activeSessionId && activeSessionId !== sessionId) {
    stopScreenAnnotationOverlay();
  }
  activeShareId = shareId;
  activeSessionId = sessionId;

  if (captureType === 'window' && !(await startWindowBoundsTracker())) {
    stopScreenAnnotationOverlay();
    return { active: false, reason: 'window-not-found' };
  }

  if (!overlayWindow || overlayWindow.isDestroyed()) {
    await createOverlayWindow();
  } else {
    updateOverlayBounds();
    overlayWindow.showInactive();
  }

  return { active: true, captureType };
}

async function configureScreenAnnotationOverlay(
  shareId,
  sessionId,
  configuration,
) {
  if (shareId !== activeShareId || sessionId !== activeSessionId) {
    return false;
  }
  overlayInteractive = Boolean(configuration?.enabled);
  if (!overlayInteractive) {
    overlayInputMode = 'draw';
    toolbarHovered = false;
  }
  pendingConfiguration = {
    enabled: overlayInteractive,
    langCode: configuration?.langCode || 'zh-CN',
    theme: configuration?.theme === 'dark' ? 'dark' : 'light',
    labels: configuration?.labels || {},
  };
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    return false;
  }
  updateOverlayMouseBehavior();
  overlayWindow.setFocusable(overlayInteractive);
  updateOverlayVisibility();
  if (overlayInteractive) {
    overlayWindow.show();
    overlayWindow.focus();
  }
  sendPendingOverlayState();
  return true;
}

function stopScreenAnnotationOverlay(shareId = '', sessionId = '') {
  if (
    (shareId && activeShareId && shareId !== activeShareId) ||
    (sessionId && activeSessionId && sessionId !== activeSessionId)
  ) {
    return;
  }
  screen.removeListener('display-metrics-changed', updateOverlayBounds);
  stopWindowBoundsTracker();
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.destroy();
  }
  overlayWindow = null;
  overlayReady = null;
  rendererReady = false;
  activeShareId = '';
  activeSessionId = '';
  pendingElements = [];
  pendingConfiguration = null;
  overlayInteractive = false;
  overlayInputMode = 'draw';
  toolbarHovered = false;
  overlayVisibleForSource = true;
  closeEventStreams();
}

function writeEvent(res, event) {
  res.write(`data: ${JSON.stringify(event)}\n\n`);
}

function emitOverlayEvent(event) {
  for (const stream of eventStreams) {
    if (stream.shareId === activeShareId && stream.sessionId === activeSessionId) {
      writeEvent(stream.res, event);
    }
  }
}

function closeEventStreams() {
  for (const stream of eventStreams) {
    stream.res.end();
  }
  eventStreams.clear();
}

ipcMain.on(INPUT_CHANNEL, (event, payload) => {
  if (
    !overlayWindow ||
    overlayWindow.isDestroyed() ||
    event.sender !== overlayWindow.webContents ||
    !overlayInteractive ||
    !payload ||
    typeof payload !== 'object'
  ) {
    return;
  }
  if (payload.type === 'input-mode') {
    overlayInputMode = payload.mode === 'mouse' ? 'mouse' : 'draw';
    toolbarHovered = false;
    updateOverlayMouseBehavior();
  } else if (payload.type === 'toolbar-hover') {
    toolbarHovered = Boolean(payload.hovering);
    updateOverlayMouseBehavior();
  } else if (payload.type === 'scene' && Array.isArray(payload.elements)) {
    emitOverlayEvent({ type: 'scene', elements: payload.elements });
  } else if (payload.type === 'clear' || payload.type === 'stop') {
    emitOverlayEvent(payload);
  }
});

ipcMain.on(READY_CHANNEL, (event) => {
  if (
    !overlayWindow ||
    overlayWindow.isDestroyed() ||
    event.sender !== overlayWindow.webContents
  ) {
    return;
  }
  rendererReady = true;
  sendPendingOverlayState();
});

function sendPendingOverlayState() {
  if (
    !rendererReady ||
    !overlayWindow ||
    overlayWindow.isDestroyed()
  ) {
    return;
  }
  if (pendingConfiguration) {
    overlayWindow.webContents.send(
      'screen-annotation:configuration',
      pendingConfiguration,
    );
  }
  overlayWindow.webContents.send('screen-annotation:scene', pendingElements);
}

function updateScreenAnnotationOverlay(shareId, sessionId, elements) {
  if (
    !shareId ||
    shareId !== activeShareId ||
    !sessionId ||
    sessionId !== activeSessionId
  ) {
    return false;
  }
  pendingElements = Array.isArray(elements) ? elements : [];
  sendPendingOverlayState();
  return true;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    let rejected = false;
    req.on('data', (chunk) => {
      if (rejected) {
        return;
      }
      size += chunk.length;
      if (size > MAX_REQUEST_SIZE) {
        rejected = true;
        reject(new Error('request body is too large'));
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (rejected) {
        return;
      }
      try {
        const body = Buffer.concat(chunks).toString('utf8');
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(new Error(`invalid JSON body: ${error.message}`));
      }
    });
    req.on('error', reject);
  });
}

function writeJson(res, statusCode, value) {
  res.writeHead(statusCode, {
    'Cache-Control': 'no-store',
    'Content-Type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(value));
}

async function handleScreenAnnotationRequest(req, res) {
  try {
    const pathname = new URL(req.url, 'http://127.0.0.1').pathname;
    if (req.method === 'GET' && pathname.endsWith('/events')) {
      const url = new URL(req.url, 'http://127.0.0.1');
      const shareId = url.searchParams.get('shareId') || '';
      const sessionId = url.searchParams.get('sessionId') || '';
      if (!shareId || !sessionId) {
        writeJson(res, 400, { error: 'annotation session identity is required' });
        return;
      }
      res.writeHead(200, {
        'Cache-Control': 'no-cache, no-store',
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream; charset=utf-8',
      });
      res.write(': connected\n\n');
      const stream = { res, shareId, sessionId };
      eventStreams.add(stream);
      req.on('close', () => eventStreams.delete(stream));
      return;
    }
    const body = await readJsonBody(req);
    if (pathname.endsWith('/start')) {
      const result = await startScreenAnnotationOverlay(
        body.shareId,
        body.sessionId,
      );
      writeJson(res, 200, result);
      return;
    }
    if (pathname.endsWith('/configure')) {
      const active = await configureScreenAnnotationOverlay(
        body.shareId,
        body.sessionId,
        body.configuration,
      );
      writeJson(res, 200, { active });
      return;
    }
    if (pathname.endsWith('/update')) {
      const active = updateScreenAnnotationOverlay(
        body.shareId,
        body.sessionId,
        body.elements,
      );
      writeJson(res, 200, { active });
      return;
    }
    if (pathname.endsWith('/stop')) {
      stopScreenAnnotationOverlay(body.shareId, body.sessionId);
      writeJson(res, 200, { active: false });
      return;
    }
    writeJson(res, 404, { error: 'unknown screen annotation action' });
  } catch (error) {
    writeJson(res, 400, { error: error.message });
  }
}

module.exports = {
  handleScreenAnnotationRequest,
  setScreenAnnotationCaptureSource,
  setScreenAnnotationOverlayOrigin,
  stopScreenAnnotationOverlay,
};
