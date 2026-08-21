const DEFAULT_SERVER_URL = 'https://192.168.56.154';

function normalizeServerUrl(
  value,
  { name = 'serverUrl', requireHttps = false } = {},
) {
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`${name} is required`);
  }

  let parsed;
  try {
    parsed = new URL(value.trim());
  } catch {
    throw new Error(`${name} must be an absolute URL`);
  }

  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new Error(`${name} must use http or https`);
  }
  if (requireHttps && parsed.protocol !== 'https:') {
    throw new Error(`${name} must use https for release builds`);
  }
  if (parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new Error(
      `${name} must be an origin without a path, query, or fragment`,
    );
  }

  return parsed.origin;
}

function getUpdateBaseUrl(serverUrl) {
  return new URL('/downloads/updates/', normalizeServerUrl(serverUrl)).toString();
}

function getDesktopConfigServerUrl(config) {
  if (!config || typeof config !== 'object') {
    throw new Error('desktop config must be an object');
  }

  return normalizeServerUrl(config.serverUrl || config.adminApiUrl);
}

module.exports = {
  DEFAULT_SERVER_URL,
  getDesktopConfigServerUrl,
  getUpdateBaseUrl,
  normalizeServerUrl,
};
