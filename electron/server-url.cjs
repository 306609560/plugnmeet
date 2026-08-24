const DEFAULT_SERVER_URL = 'http://192.168.56.154';
const PORTAL_PUBLIC_PATH = '/ccti/earth/meet';
const API_PUBLIC_PATH = `${PORTAL_PUBLIC_PATH}/api`;
const CLIENT_PUBLIC_PATH = `${PORTAL_PUBLIC_PATH}/room`;
const PNM_PUBLIC_PATH = `${PORTAL_PUBLIC_PATH}/plugnmeet`;

function normalizeServerUrl(value, { name = 'serverUrl' } = {}) {
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
  if (parsed.pathname !== '/' || parsed.search || parsed.hash) {
    throw new Error(
      `${name} must be an origin without a path, query, or fragment`,
    );
  }

  return parsed.origin;
}

function getUpdateBaseUrl(serverUrl) {
  return new URL(
    `${API_PUBLIC_PATH}/downloads/updates/`,
    normalizeServerUrl(serverUrl),
  ).toString();
}

function getDesktopConfigServerUrl(config) {
  if (!config || typeof config !== 'object') {
    throw new Error('desktop config must be an object');
  }

  return normalizeServerUrl(config.serverUrl || config.adminApiUrl);
}

module.exports = {
  API_PUBLIC_PATH,
  CLIENT_PUBLIC_PATH,
  DEFAULT_SERVER_URL,
  PNM_PUBLIC_PATH,
  PORTAL_PUBLIC_PATH,
  getDesktopConfigServerUrl,
  getUpdateBaseUrl,
  normalizeServerUrl,
};
