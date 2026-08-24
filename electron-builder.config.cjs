const packageJson = require('./package.json');
const {
  DEFAULT_SERVER_URL,
  getUpdateBaseUrl,
  normalizeServerUrl,
} = require('./electron/server-url.cjs');

const releaseBuild = process.env.UNICCMEET_RELEASE_BUILD === 'true';
const serverUrl = normalizeServerUrl(
  process.env.UNICCMEET_SERVER_URL || DEFAULT_SERVER_URL,
  { name: 'UNICCMEET_SERVER_URL' },
);
const updateUrl = getUpdateBaseUrl(serverUrl);

module.exports = {
  ...packageJson.build,
  publish: updateUrl
    ? [
        {
          provider: 'generic',
          url: updateUrl,
        },
      ]
    : undefined,
  mac: {
    ...packageJson.build.mac,
    notarize: releaseBuild,
  },
};
