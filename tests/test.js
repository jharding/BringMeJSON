test('Name attribute is one word', function() {
    var data = bmj.oneword;

    strictEqual(data.one, 1);
    strictEqual(data.two, 2);
});

test('Name attribute is two words', function() {
    var data = bmj['two words'];

    strictEqual(data.one, 1);
    strictEqual(data.two, 2);
});

test('Invalid JSON', function() {
    var data = bmj.invalid;
    
    strictEqual(data, null);
});
