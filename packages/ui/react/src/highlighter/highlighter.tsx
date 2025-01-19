import * as React from "react";
import { tokenize, type Token } from "./token";
import { mark, text } from "./highlighter.css";

interface HighlighterProps {
  /**
   * The full text in which to search for `mark`.
   */
  text: string;

  /**
   * The substring to be highlighted wherever it appears in `text`.
   */
  mark: string;
}

const Mark: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className={mark}>{children}</span>;
};

const Text: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className={text}>{children}</span>;
};

const renderToken = (token: Token) => {
  switch (token.type) {
    case "mark":
      return <Mark>{token.content}</Mark>;
    default:
      return <Text>{token.content}</Text>;
  }
};

const Highlighter: React.FC<HighlighterProps> = ({ text, mark }) => {
  const tokens = tokenize(text, mark);
  return <span>{tokens.map(renderToken)}</span>;
};

export { Highlighter };
export type { HighlighterProps };
