/**
 * Returns a shallow copy of the given object, omitting the specified keys.
 *
 * @template T - The type of the original object.
 * @template K - The union type of keys to omit.
 * @param {T} obj - The original object from which to omit keys.
 * @param {...K} keys - The keys to omit from the object.
 * @returns {Omit<T, K>} A new object without the specified keys.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
}
