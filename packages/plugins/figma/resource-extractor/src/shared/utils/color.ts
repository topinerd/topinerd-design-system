/**
 * Checks if the given value is an RGBA object in Integer Form.
 * @param value - The value to check.
 * @returns True if the value is an RGBA object in Integer Form, false otherwise.
 */
export function isRGBA(value: unknown): value is RGBA {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const { r, g, b, a } = value as Partial<RGBA>;

  const isChannelValid = (channel: unknown) =>
    typeof channel === "number" && channel >= 0 && channel <= 1;

  const isAlphaValid = (alpha: unknown) =>
    typeof alpha === "number" && alpha >= 0 && alpha <= 1;

  return (
    isChannelValid(r) &&
    isChannelValid(g) &&
    isChannelValid(b) &&
    (a === undefined || isAlphaValid(a))
  );
}

/**
 * Converts an RGBA color in Integer Form to a HEX string.
 * @param rgba - The RGBA object to convert.
 * @returns The HEX representation of the color.
 */
export function rgbToHex(color: {
  r: number;
  g: number;
  b: number;
  a?: number;
}): string {
  // Convert r, g, b values from 0-1 range to 0-255
  const to255 = (value: number) => Math.round(value * 255);

  const r = to255(color.r).toString(16).padStart(2, "0");
  const g = to255(color.g).toString(16).padStart(2, "0");
  const b = to255(color.b).toString(16).padStart(2, "0");

  let hex = `#${r}${g}${b}`;
  if (color.a !== undefined && color.a < 1) {
    const a = Math.round(color.a * 255)
      .toString(16)
      .padStart(2, "0");
    hex += a;
  }

  return hex.toUpperCase();
}
