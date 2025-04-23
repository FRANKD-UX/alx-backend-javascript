import setFromArray from "../6-set.js";

describe('setFromArray', () => {
  test('creates a Set from an array', () => {
    const result = setFromArray([12, 32, 15, 78, 98, 15]);
    expect(result).toBeInstanceOf(Set);
    expect(result.size).toBe(5); // Unique values only
    expect(result.has(12)).toBe(true);
    expect(result.has(32)).toBe(true);
    expect(result.has(15)).toBe(true);
    expect(result.has(78)).toBe(true);
    expect(result.has(98)).toBe(true);
  });

  test('handles empty arrays', () => {
    const result = setFromArray([]);
    expect(result).toBeInstanceOf(Set);
    expect(result.size).toBe(0);
  });

  test('handles arrays with mixed types', () => {
    const result = setFromArray([1, 'hello', true, {}, []]);
    expect(result).toBeInstanceOf(Set);
    expect(result.size).toBe(5);
    expect(result.has(1)).toBe(true);
    expect(result.has('hello')).toBe(true);
    expect(result.has(true)).toBe(true);
  });
});
