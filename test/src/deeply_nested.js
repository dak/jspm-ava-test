import test from 'ava';
import {returnTrue} from '~/one/two/test';

test('JSPM', assert => {
    let actual = returnTrue();
    let expected = true;

    assert.is(actual, expected,
        'returnTrue() should return true.');
});
