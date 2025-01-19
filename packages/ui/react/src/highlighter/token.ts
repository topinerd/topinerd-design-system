type TokenType = "mark" | "text";
type Token = {
  type: TokenType;
  content: string;
};

/**
 * Splits the given text into tokens based on the specified mark.
 * Each occurrence of the mark becomes a token of type `"mark"`,
 * and the segments of text between marks become tokens of type `"text"`.
 *
 * @param text - The original text to be tokenized.
 * @param mark - The substring used as a delimiter or marker.
 * @returns
 * An array of tokens, where each token has a `type` (`"text"` or `"mark"`)
 * and a `content` property containing the corresponding substring.
 *
 * @example
 * // Given the text "aa##bb##cc" and the mark "##":
 * //
 * // tokenize("aa##bb##cc", "##") returns:
 * // [
 * //   { type: "text", content: "aa" },
 * //   { type: "mark", content: "##" },
 * //   { type: "text", content: "bb" },
 * //   { type: "mark", content: "##" },
 * //   { type: "text", content: "cc" },
 * // ]
 */
function tokenize(text: string, mark: string) {
  const tokens: Token[] = [];
  let lastIndex = 0;

  while (true) {
    // Find the next occurrence of `mark`
    const index = text.indexOf(mark, lastIndex);

    // If there are no more occurrences, push the remaining text (if any) and break
    if (index === -1) {
      if (lastIndex < text.length) {
        tokens.push({
          type: "text",
          content: text.slice(lastIndex),
        });
      }
      break;
    }

    // Push the text before `mark` as a variable token (if non-empty)
    if (index > lastIndex) {
      tokens.push({
        type: "text",
        content: text.slice(lastIndex, index),
      });
    }

    // Push the mark itself as a mark token
    tokens.push({
      type: "mark",
      content: mark,
    });

    // Advance past this occurrence of `mark`
    lastIndex = index + mark.length;
  }

  return tokens;
}

export { tokenize };
export type { Token, TokenType };
