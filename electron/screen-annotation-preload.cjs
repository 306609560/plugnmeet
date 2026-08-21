const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('uniccmeetScreenAnnotation', {
  emit: (payload) => ipcRenderer.send('screen-annotation:input', payload),
  onConfiguration: (callback) => {
    const listener = (_event, configuration) => callback(configuration);
    ipcRenderer.on('screen-annotation:configuration', listener);
    return () =>
      ipcRenderer.removeListener('screen-annotation:configuration', listener);
  },
  onScene: (callback) => {
    const listener = (_event, elements) => callback(elements);
    ipcRenderer.on('screen-annotation:scene', listener);
    return () => ipcRenderer.removeListener('screen-annotation:scene', listener);
  },
  ready: () => ipcRenderer.send('screen-annotation:ready'),
});
