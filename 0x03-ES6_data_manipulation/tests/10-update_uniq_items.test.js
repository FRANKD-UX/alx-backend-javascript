import updateUniqueItems from "../10-update_uniq_items.js";
import groceriesList from "../9-groceries_list.js";

describe('updateUniqueItems', () => {
  test('updates items with quantity 1 to quantity 100', () => {
    const map = groceriesList();
    updateUniqueItems(map);
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
    expect(map.get('Apples')).toBe(10); // unchanged
    expect(map.get('Tomatoes')).toBe(10); // unchanged
    expect(map.get('Banana')).toBe(5); // unchanged
  });

  test('throws an error if argument is not a map', () => {
    expect(() => {
      updateUniqueItems({});
    }).toThrow('Cannot process');
    
    expect(() => {
      updateUniqueItems([]);
    }).toThrow('Cannot process');
    
    expect(() => {
      updateUniqueItems(null);
    }).toThrow('Cannot process');
  });

  test('returns the updated map', () => {
    const map = groceriesList();
    const result = updateUniqueItems(map);
    expect(result).toBe(map); // Same reference
  });
});
