import serverUrlConfig from '../electron/server-url.cjs';

const { DEFAULT_SERVER_URL, normalizeServerUrl } = serverUrlConfig;

const required = [];

if (process.platform === 'win32') {
  required.push('CSC_LINK', 'CSC_KEY_PASSWORD');
}
if (process.platform === 'darwin') {
  required.push(
    'CSC_LINK',
    'CSC_KEY_PASSWORD',
    'APPLE_API_KEY',
    'APPLE_API_KEY_ID',
    'APPLE_API_ISSUER',
    'APPLE_TEAM_ID',
  );
}

const missing = required.filter((name) => !process.env[name]?.trim());
if (missing.length > 0) {
  throw new Error(`Missing release environment variables: ${missing.join(', ')}`);
}

normalizeServerUrl(process.env.UNICCMEET_SERVER_URL || DEFAULT_SERVER_URL, {
  name: 'UNICCMEET_SERVER_URL',
  requireHttps: true,
});

console.log(`Release environment is valid for ${process.platform}/${process.arch}`);
