import test from 'node:test';
import assert from 'node:assert/strict';
import { getFallbackResponse, isDatabaseUnavailable } from '../utils/fallback.js';

test('returns a fallback payload for settings when the database is unavailable', () => {
  assert.deepEqual(getFallbackResponse('settings'), {});
});

test('recognizes common database connection errors', () => {
  assert.equal(isDatabaseUnavailable({ code: 'ECONNREFUSED' }), true);
  assert.equal(isDatabaseUnavailable({ code: 'ER_BAD_DB_ERROR' }), true);
  assert.equal(isDatabaseUnavailable({ message: 'something else happened' }), false);
});
