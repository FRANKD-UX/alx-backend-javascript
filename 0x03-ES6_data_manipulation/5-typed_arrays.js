/**
 * Creates an Int8 typed array with a value at a specific position
 * @param {Number} length - Length of the array buffer
 * @param {Number} position - Position to set the value
 * @param {Number} value - Value to set
 * @returns {DataView} DataView of the array buffer
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  
  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);
  dataView.setInt8(position, value);
  
  return dataView;
}
