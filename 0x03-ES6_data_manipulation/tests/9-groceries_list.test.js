import groceriesList from "../9-groceries_list.js";

describe('groceriesList', () => {
  test('returns a Map with the correct items and quantities', () => {
    const groceries = groceriesList();
    expect(groceries).toBeInstanceOf(Map);
    expect(groceries.size).toBe(5);
    expect(groceries.get('Apples')).toBe(10);
    expect(groceries.get('Tomatoes')).toBe(10);
    expect(groceries.get('Pasta')).toBe(1);
    expect(groceries.get('Rice')).toBe(1);
    expect(groceries.get('Banana')).toBe(5);
  });

  test('does not contain any extra items', () => {
    const groceries = groceriesList();
    const keys = Array.from(groceries.keys());
    expect(keys).toEqual(['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana']);
  });
});
