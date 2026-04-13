const { sum } = require("../src/utils");

// test('describe', function())

test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
});