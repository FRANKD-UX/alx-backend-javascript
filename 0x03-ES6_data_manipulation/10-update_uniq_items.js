/**
 * Updates items with quantity 1 to quantity 100
 * @param {Map} map - Map of items and quantities
 * @returns {Map} Updated map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  
  return map;
}
