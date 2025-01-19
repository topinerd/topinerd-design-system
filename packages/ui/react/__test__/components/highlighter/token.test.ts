import { describe, it, expect } from "vitest";
import { tokenize } from "../../../src//highlighter/token";

describe("tokenize function", () => {
  it("returns one variable token if mark is not found", () => {
    const input = "Hello World";
    const mark = "x";

    const result = tokenize(input, mark);

    expect(result).toEqual([{ type: "text", content: "Hello World" }]);
  });

  it("splits the string multiple times if mark occurs more than once", () => {
    const input = "abcXYZdefXYZghi";
    const mark = "XYZ";

    const result = tokenize(input, mark);

    expect(result).toEqual([
      { type: "text", content: "abc" },
      { type: "mark", content: "XYZ" },
      { type: "text", content: "def" },
      { type: "mark", content: "XYZ" },
      { type: "text", content: "ghi" },
    ]);
  });

  it("handles mark at the start of the string", () => {
    const input = "!!Hello!!";
    const mark = "!!";

    const result = tokenize(input, mark);

    expect(result).toEqual([
      { type: "mark", content: "!!" },
      { type: "text", content: "Hello" },
      { type: "mark", content: "!!" },
    ]);
  });

  it("handles mark at the end of the string", () => {
    const input = "Hello!!";
    const mark = "!!";

    const result = tokenize(input, mark);

    expect(result).toEqual([
      { type: "text", content: "Hello" },
      { type: "mark", content: "!!" },
    ]);
  });
});
