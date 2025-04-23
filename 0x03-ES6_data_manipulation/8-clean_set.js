/**
 * Returns a string of all Set values that start with a specific string
 * @param {Set} set - Input Set
 * @param {String} startString - String to check for at the beginning
 * @returns {String} String of values (minus the startString) joined by '-'
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
