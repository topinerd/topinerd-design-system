/**
 * Merges multiple class name inputs into a single class string.
 * Falsy values (false, null, undefined, empty string) are filtered out.
 *
 * @param {...Array<string | boolean | null | undefined>} classNames - An array of class names or falsy values.
 * @returns {string} - A space-separated string containing all truthy class names.
 */
export function cnMerge(
  ...classNames: Array<string | boolean | null | undefined>
): string {
  return classNames.filter(Boolean).join(" ");
}

/**
 * Converts a pixel value to a rem value.
 *
 * @param {string} pxValue - The pixel value to convert, with or without the "px" suffix.
 * @param {number} baseFontSize - The base font size in pixels, used for the conversion. Defaults to 16.
 * @returns {string} The rem value with the "rem" suffix. If the input is not a valid number, returns the original input.
 */
export function pxToRem(pxValue: string, baseFontSize: number = 10): string {
  const pxNumber = parseFloat(pxValue);

  if (isNaN(pxNumber)) {
    return pxValue;
  }

  const remValue = pxNumber / baseFontSize;
  return `${remValue}rem`;
}
