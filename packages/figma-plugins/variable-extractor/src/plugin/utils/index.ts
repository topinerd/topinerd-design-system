export function isRGBA(value: any): value is RGBA {
  return (
    typeof value === "object" &&
    "r" in value &&
    "g" in value &&
    "b" in value &&
    "a" in value
  );
}

export function isVariableAlias(value: any): value is VariableAlias {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    value.type === "VARIABLE_ALIAS" &&
    "id" in value
  );
}

export function rgbToHex({ r, g, b, a }: RGBA): string {
  const toHex = (value: number) => {
    const hex = Math.round(value * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
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
