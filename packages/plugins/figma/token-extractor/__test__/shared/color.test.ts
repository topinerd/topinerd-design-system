import { describe, it, expect } from "vitest";
import { isRGBA, rgbToHex } from "../../src/shared/utils/color";

describe("isRGBA (Integer Form)", () => {
  it("should return true for a valid RGBA object", () => {
    const validRGBA = { r: 255, g: 128, b: 64, a: 0.5 };
    expect(isRGBA(validRGBA)).toBe(true);
  });

  it("should return true for an RGBA object without alpha", () => {
    const validRGBA = { r: 255, g: 128, b: 64 };
    expect(isRGBA(validRGBA)).toBe(true);
  });

  it("should return false for an object missing one or more properties", () => {
    const missingKeys = { r: 255, g: 128 };
    expect(isRGBA(missingKeys)).toBe(false);
  });

  it("should return false for out-of-range RGB values", () => {
    const outOfRangeRGBA = { r: 300, g: -10, b: 256, a: 0.5 };
    expect(isRGBA(outOfRangeRGBA)).toBe(false);
  });

  it("should return false for out-of-range alpha values", () => {
    const outOfRangeAlpha = { r: 255, g: 128, b: 64, a: 1.5 };
    expect(isRGBA(outOfRangeAlpha)).toBe(false);
  });
});

describe("rgbToHex (Integer Form)", () => {
  it("should convert a valid RGBA object to a HEX string without alpha", () => {
    const rgba = { r: 255, g: 128, b: 64, a: 1 };
    expect(rgbToHex(rgba)).toBe("#ff8040");
  });

  it("should convert a valid RGBA object to a HEX string with alpha", () => {
    const rgba = { r: 255, g: 128, b: 64, a: 0.5 };
    expect(rgbToHex(rgba)).toBe("#ff804080");
  });

  it("should handle alpha close to 1", () => {
    const rgba = { r: 255, g: 128, b: 64, a: 0.99 };
    expect(rgbToHex(rgba)).toBe("#ff8040fc");
  });

  it("should handle objects without alpha (default to 1)", () => {
    const rgba = { r: 255, g: 128, b: 64 };
    expect(rgbToHex(rgba)).toBe("#ff8040");
  });
});
