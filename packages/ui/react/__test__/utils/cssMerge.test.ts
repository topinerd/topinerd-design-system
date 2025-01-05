import { describe, it, expect } from "vitest";
import { cnMerge } from "../../src/utils";

describe("cssMerge utility function", () => {
  it("should return an empty string when no arguments are provided", () => {
    expect(cnMerge()).toBe("");
  });

  it("should merge multiple strings into a single string separated by spaces", () => {
    const merged = cnMerge("classA", "classB", "classC");
    expect(merged).toBe("classA classB classC");
  });

  it("should filter out falsy values and keep only truthy class names", () => {
    const merged = cnMerge(
      "classA",
      false,
      undefined,
      "classB",
      null,
      "classC",
      "",
    );
    expect(merged).toBe("classA classB classC");
  });

  it("should handle only falsy values and return an empty string", () => {
    const merged = cnMerge(null, false, "", undefined);
    expect(merged).toBe("");
  });
});
