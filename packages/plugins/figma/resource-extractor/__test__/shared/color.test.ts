import { describe, it, expect } from "vitest";
import { isRGBA, rgbToHex } from "../../src/shared/utils/color";

describe("isRGBA (0~1 Range)", () => {
  it("should return true for a valid RGBA object", () => {
    const validRGBA = { r: 0.5, g: 0.2, b: 0.1, a: 0.5 };
    expect(isRGBA(validRGBA)).toBe(true);
  });

  it("should return true for an RGBA object without alpha", () => {
    const validRGBA = { r: 0.5, g: 0.2, b: 0.1 };
    expect(isRGBA(validRGBA)).toBe(true);
  });

  it("should return false for an object missing one or more properties", () => {
    const missingKeys = { r: 0.5, g: 0.2 };
    expect(isRGBA(missingKeys)).toBe(false);
  });

  it("should return false for out-of-range RGB values", () => {
    const outOfRangeRGBA = { r: 1.2, g: -0.1, b: 2.5, a: 0.5 };
    expect(isRGBA(outOfRangeRGBA)).toBe(false);
  });

  it("should return false for out-of-range alpha values", () => {
    const outOfRangeAlpha = { r: 0.5, g: 0.2, b: 0.1, a: 1.5 };
    expect(isRGBA(outOfRangeAlpha)).toBe(false);
  });

  it("should return false for non-object input", () => {
    const invalidInput = 123;
    expect(isRGBA(invalidInput)).toBe(false);
  });

  it("should return false for null input", () => {
    const invalidInput = null;
    expect(isRGBA(invalidInput)).toBe(false);
  });
});

describe("rgbToHex (0~1 Range)", () => {
  it("should convert a valid RGBA object to a HEX string without alpha", () => {
    const rgba = { r: 1, g: 0.5, b: 0.25, a: 1 };
    expect(rgbToHex(rgba)).toBe("#FF8040");
  });

  it("should convert a valid RGBA object to a HEX string with alpha", () => {
    const rgba = { r: 1, g: 0.5, b: 0.25, a: 0.5 };
    expect(rgbToHex(rgba)).toBe("#FF804080");
  });

  it("should handle alpha close to 1", () => {
    const rgba = { r: 1, g: 0.5, b: 0.25, a: 0.99 };
    expect(rgbToHex(rgba)).toBe("#FF8040FC");
  });

  it("should handle objects without alpha (default to full opacity)", () => {
    const rgba = { r: 1, g: 0.5, b: 0.25 };
    expect(rgbToHex(rgba)).toBe("#FF8040");
  });
});
