import { queryAPI, weakMap } from "../100-weak.js";

describe('WeakMap implementation', () => {
  test('weakMap is an instance of WeakMap', () => {
    expect(weakMap).toBeInstanceOf(WeakMap);
  });

  test('queryAPI increments the count for an endpoint', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };
    
    // Initial call
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);
    
    // Second call
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);
  });

  test('queryAPI throws an error when endpoint is called 5 times', () => {
    const endpoint = { protocol: 'http', name: 'getProducts' };
    
    // First 4 calls should not throw
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    queryAPI(endpoint);
    
    // 5th call should throw
    expect(() => {
      queryAPI(endpoint);
    }).toThrow('Endpoint load is high');
  });

  test('weakMap uses different counters for different endpoints', () => {
    const endpoint1 = { protocol: 'http', name: 'getCategories' };
    const endpoint2 = { protocol: 'http', name: 'getOrders' };
    
    queryAPI(endpoint1);
    queryAPI(endpoint1);
    
    queryAPI(endpoint2);
    
    expect(weakMap.get(endpoint1)).toBe(2);
    expect(weakMap.get(endpoint2)).toBe(1);
  });
});
