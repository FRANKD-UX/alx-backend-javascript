import createInt8TypedArray from "../5-typed_arrays.js";

describe('createInt8TypedArray', () => {
  test('creates a typed array with the correct length', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result.byteLength).toBe(10);
  });

  test('sets the value at the specified position', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result.getInt8(2)).toBe(89);
  });

  test('throws an error if position is outside range', () => {
    expect(() => {
      createInt8TypedArray(5, 10, 89);
    }).toThrow('Position outside range');
  });

  test('returns a DataView object', () => {
    const result = createInt8TypedArray(10, 2, 89);
    expect(result).toBeInstanceOf(DataView);
  });
});
