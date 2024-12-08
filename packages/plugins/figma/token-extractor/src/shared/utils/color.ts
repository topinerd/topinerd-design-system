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
    typeof channel === "number" && channel >= 0 && channel <= 255;

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
export function rgbToHex({ r, g, b, a = 1 }: RGBA): string {
  const toHex = (value: number) => {
    const hex = Math.round(value).toString(16);
    return hex.padStart(2, "0");
  };

  const hex = [toHex(r), toHex(g), toHex(b)].join("");

  if (a !== 1) {
    const alpha = Math.round(a * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${hex}${alpha}`;
  }

  return `#${hex}`;
}
