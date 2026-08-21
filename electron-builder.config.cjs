const packageJson = require('./package.json');

const releaseBuild = process.env.UNICCMEET_RELEASE_BUILD === 'true';
const updateUrl = process.env.UNICCMEET_UPDATE_URL;

if (releaseBuild && !updateUrl) {
  throw new Error('UNICCMEET_UPDATE_URL is required for release builds');
}

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
