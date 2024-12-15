/**
 * Converts a flat object into a nested structure based on dot-separated keys.
 * @param obj - The flat object to convert.
 * @returns The nested object.
 */
export function convertToNested<T extends Record<string, any>>(
  obj: T,
): Record<string, any> {
  const result: Record<string, any> = {};

  for (const key in obj) {
    const parts = key.split(".");
    let current = result;

    parts.forEach((part, index) => {
      // If it's the last part, assign the value
      if (index === parts.length - 1) {
        current[part] = obj[key];
      } else {
        // Ensure the path exists and is an object
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    });
  }

  return result;
}
