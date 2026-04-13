const { sum } = require("../src/utils");

// test('describe', function())
// it('describe', function())

it('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
});

// it.only('checks if the two added numbers are not 0', () => {
it('checks if the two added numbers are not 0', () => {
    expect(sum(2, 3)).not.toBe(0);
});