/**
 * WeakMap to track API calls
 */
export const weakMap = new WeakMap();

/**
 * Tracks the number of times queryAPI is called for each endpoint
 * @param {Object} endpoint - API endpoint object
 * @throws {Error} Throws error when endpoint is called 5 or more times
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);
  
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
