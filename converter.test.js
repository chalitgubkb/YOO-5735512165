const converter = require('./converter.js')
test('input is 0', () => {
    expect(converter(0)).toEqual('$0.00');
});
test('input is 50', () => {
    expect(converter(50)).toEqual('$1.66');
});
test('input is 100', () => {
    expect(converter(100)).toEqual('$3.31');
});
test('input is String', () => {
    expect(converter('String')).toEqual('error');
});