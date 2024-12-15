import { describe, it, expect } from "vitest";
import { convertToNested } from "../../src/shared/utils/obj";

describe("convertToNested", () => {
  it("should convert a flat object with dot-separated keys into a nested object", () => {
    const flatObject = {
      "user.name": "Alice",
      "user.age": 30,
      "settings.theme.color": "dark",
      "settings.notifications.email": true,
    };

    const expectedNestedObject = {
      user: {
        name: "Alice",
        age: 30,
      },
      settings: {
        theme: {
          color: "dark",
        },
        notifications: {
          email: true,
        },
      },
    };

    const result = convertToNested(flatObject);
    expect(result).toEqual(expectedNestedObject);
  });

  it("should handle an empty object", () => {
    const flatObject = {};
    const expectedNestedObject = {};

    const result = convertToNested(flatObject);
    expect(result).toEqual(expectedNestedObject);
  });

  it("should handle a flat object with no dot-separated keys", () => {
    const flatObject = {
      name: "Alice",
      age: 30,
    };

    const expectedNestedObject = {
      name: "Alice",
      age: 30,
    };

    const result = convertToNested(flatObject);
    expect(result).toEqual(expectedNestedObject);
  });

  it("should handle keys with multiple levels of nesting", () => {
    const flatObject = {
      "a.b.c.d": 1,
      "a.b.c.e": 2,
      "a.f": 3,
    };

    const expectedNestedObject = {
      a: {
        b: {
          c: {
            d: 1,
            e: 2,
          },
        },
        f: 3,
      },
    };

    const result = convertToNested(flatObject);
    expect(result).toEqual(expectedNestedObject);
  });

  it("should handle non-string values correctly", () => {
    const flatObject = {
      "a.b": 42,
      "a.c": null,
      "a.d": true,
    };

    const expectedNestedObject = {
      a: {
        b: 42,
        c: null,
        d: true,
      },
    };

    const result = convertToNested(flatObject);
    expect(result).toEqual(expectedNestedObject);
  });
});
