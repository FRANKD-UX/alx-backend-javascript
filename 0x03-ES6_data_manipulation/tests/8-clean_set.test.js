import cleanSet from "../8-clean_set.js";

describe('cleanSet', () => {
  test('returns a string of values that start with startString, with startString removed', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte-appetit');
  });

  test('returns an empty string if startString is empty', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set, '')).toBe('');
  });

  test('returns an empty string if startString is not provided', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    expect(cleanSet(set)).toBe('');
  });

  test('handles values that do not start with startString', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'hello', 'world']);
    expect(cleanSet(set, 'bon')).toBe('jovi-aparte');
  });

  test('handles non-string values in the set', () => {
    const set = new Set(['bonjovi', 123, true, { key: 'bon-value' }]);
    expect(cleanSet(set, 'bon')).toBe('jovi');
  });

  test('handles empty sets', () => {
    const set = new Set();
    expect(cleanSet(set, 'bon')).toBe('');
  });
});
