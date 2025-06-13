const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers when both are integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded numbers when both are floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum when first argument is integer and second is float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum when first argument is float and second is integer', () => {
    assert.strictEqual(calculateNumber(1.2, 3), 4);
  });

  it('should handle rounding up correctly', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should handle one negative and one positive number', () => {
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
  });

  it('should handle zero values', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle zero and positive number', () => {
    assert.strictEqual(calculateNumber(0, 5.5), 6);
  });

  it('should handle zero and negative number', () => {
    assert.strictEqual(calculateNumber(0, -5.5), -6);
  });
});
