'use strict';

const AlgebraicObjects = require('.');

test(
    'Test that Algebraic Objects module has data field',
    () => {
        expect(AlgebraicObjects._data).not.toBe(undefined);
    }
);
