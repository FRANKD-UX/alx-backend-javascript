/**
 * Checks if all elements in an array exist within a Set
 * @param {Set} set - Input Set
 * @param {Array} array - Array of values to check
 * @returns {Boolean} True if all elements exist in the Set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
