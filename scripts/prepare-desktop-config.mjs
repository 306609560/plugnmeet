import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import serverUrlConfig from '../electron/server-url.cjs';

const { DEFAULT_SERVER_URL, normalizeServerUrl } = serverUrlConfig;

const serverUrl = normalizeServerUrl(
  process.env.UNICCMEET_SERVER_URL || DEFAULT_SERVER_URL,
  { name: 'UNICCMEET_SERVER_URL' },
);

const target = path.resolve('build', 'desktop-config.json');
await mkdir(path.dirname(target), { recursive: true });
await writeFile(
  target,
  `${JSON.stringify({ serverUrl }, null, 2)}\n`,
  'utf8',
);
console.log(`Prepared ${target}`);
