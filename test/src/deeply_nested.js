import test from 'ava';

test('JSPM', async function (assert) {
    const module = await SystemJS.import('~/one/two/test');

    let actual = module.returnTrue();
    let expected = true;

    assert.is(actual, expected,
        'returnTrue() should return true.');
});
