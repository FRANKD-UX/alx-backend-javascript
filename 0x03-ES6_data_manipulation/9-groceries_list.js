/**
 * Returns a Map of groceries with items and quantities
 * @returns {Map} Map with grocery items as keys and quantities as values
 */
export default function groceriesList() {
  const groceries = new Map();
  
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  return groceries;
}
