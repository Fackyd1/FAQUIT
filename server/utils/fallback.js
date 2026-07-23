export function isDatabaseUnavailable(error) {
  if (!error || typeof error !== 'object') return false;

  const codes = ['ECONNREFUSED', 'ECONNRESET', 'ER_BAD_DB_ERROR', 'ER_NO_SUCH_TABLE', 'PROTOCOL_CONNECTION_LOST'];
  const message = `${error.message || ''} ${error.code || ''}`.toLowerCase();

  return codes.some((code) => message.includes(code.toLowerCase()));
}

export function getFallbackResponse(resource) {
  const fallbacks = {
    releases: [],
    songs: [],
    gallery: [],
    socials: [],
    settings: {}
  };

  return fallbacks[resource] ?? [];
}
