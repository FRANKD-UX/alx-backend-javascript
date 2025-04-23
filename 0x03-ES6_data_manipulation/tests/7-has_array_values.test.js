import hasValuesFromArray from "../7-has_array_values.js";

describe('hasValuesFromArray', () => {
  test('returns true if all elements exist in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [1])).toBe(true);
    expect(hasValuesFromArray(set, [1, 3, 5])).toBe(true);
  });

  test('returns false if any element does not exist in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [10])).toBe(false);
    expect(hasValuesFromArray(set, [1, 10])).toBe(false);
  });

  test('handles empty arrays', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    expect(hasValuesFromArray(set, [])).toBe(true);
  });

  test('handles empty sets', () => {
    const set = new Set();
    expect(hasValuesFromArray(set, [1])).toBe(false);
    expect(hasValuesFromArray(set, [])).toBe(true);
  });
});
