import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveSiteState } from './content.js';

test('resolveSiteState uses safe defaults when data is missing', () => {
  const state = resolveSiteState({
    settings: {},
    releases: null,
    songs: null,
    gallery: null,
    socials: null
  });

  assert.equal(state.title, 'FAQUIT');
  assert.equal(state.heroText, 'A sound-driven visual experience.');
  assert.deepEqual(state.releases, []);
  assert.deepEqual(state.songs, []);
  assert.deepEqual(state.gallery, []);
  assert.deepEqual(state.socials, []);
});
