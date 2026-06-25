import assert from 'node:assert/strict';
import test from 'node:test';

import { TSP_TRUSTBADGE_REPOSITORY } from '../src/index.js';

test('repository doctrine is explicit', () => {
  assert.equal(
    TSP_TRUSTBADGE_REPOSITORY.doctrine,
    'TSP verifies evidence state, not truth or final legal outcome.'
  );
});

