'use strict';

import test from 'ava';

import * as m from '../src/esm.js';

test('default', (t) => {
	t.is(m.f(true), true);
	t.is(m.f(false), false);
});
