'use strict';

import test from 'ava';

import * as m from '../src/esm.mjs';

test('default', (t) => {
	t.is(m.f(true), true);
	t.is(m.f(false), false);
});
