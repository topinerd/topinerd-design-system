type TokenNode<TNode, TLeaf> =
  | TLeaf
  | { [Key in keyof TNode]: TokenNode<TNode[Key], TLeaf> };

type TokenLeafNode = { $type: string; $value: string | number };
type ThemeTokenNode = { light: TokenLeafNode; dark: TokenLeafNode };

type TransformToken<TNode, TLeaf, TResult> = TNode extends TLeaf
  ? TResult
  : { [K in keyof TNode]: TransformToken<TNode[K], TLeaf, TResult> };

export function transformBasicToken<T extends TokenNode<T, TokenLeafNode>>(
  node: T,
): TransformToken<T, TokenLeafNode, string> {
  if ("$type" in node && "$value" in node) {
    if (node.$type === "COLOR") {
      return node["$value"] as TransformToken<T, TokenLeafNode, string>;
    }

    return `${node["$value"]}px` as TransformToken<T, TokenLeafNode, string>;
  }

  //@todo [fix any type of 'transformed' object]
  const transformed = {} as any;

  for (const key in node) {
    transformed[key] = transformBasicToken(node[key]);
  }

  return transformed as TransformToken<T, TokenLeafNode, string>;
}

export function transformSemanticToken<T extends TokenNode<T, ThemeTokenNode>>(
  node: T,
): TransformToken<T, ThemeTokenNode, string> {
  if ("light" in node && "dark" in node) {
    return "" as TransformToken<T, ThemeTokenNode, string>;
  }

  //@todo [fix any type of 'transformed' object]
  const transformed = {} as any;

  for (const key in node) {
    transformed[key] = transformSemanticToken(node[key]);
  }

  return transformed as TransformToken<T, ThemeTokenNode, string>;
}

export function transformModeToken<T extends TokenNode<T, ThemeTokenNode>>(
  node: T,
  mode: "light" | "dark",
  primitiveTokens: { [key: string]: string }[],
): TransformToken<T, ThemeTokenNode, string> {
  if ("light" in node && "dark" in node) {
    const value = node[mode].$value;

    //@todo [re construct type]
    if (typeof value !== "string") throw Error("not implemented");

    const resolvedValue = resolvePlaceholder(value, primitiveTokens);
    return resolvedValue as TransformToken<T, ThemeTokenNode, string>;
  }

  //@todo [fix any type of 'transformed' object]
  const transformed = {} as any;

  for (const key in node) {
    transformed[key] = transformModeToken(node[key], mode, primitiveTokens);
  }

  return transformed as TransformToken<T, ThemeTokenNode, string>;
}

export function flattenTokens(
  obj: any,
  prefix = "",
  res: any = {},
): { [key: string]: string } {
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "object" && value !== null) {
      if ("$value" in value) {
        // When value is an object containing a $value property
        res[newKey] = value.$value;
      } else {
        // Continue recursion if value is an object but doesn't have $value
        flattenTokens(value, newKey, res);
      }
    } else {
      // When value is a primitive (string, number, etc.), assign it directly
      res[newKey] = value;
    }
  }
  return res;
}

function resolvePlaceholder(
  value: string,
  primitiveTokensArray: { [key: string]: string }[],
): string {
  //@ts-ignore
  return value.replace(/\{([^\}]+)\}/g, (_, tokenKey) => {
    for (const primitiveTokens of primitiveTokensArray) {
      if (tokenKey in primitiveTokens) {
        return primitiveTokens[tokenKey];
      }
    }
    return "black";
    // throw new Error(`Token "${tokenKey}" not found in primitive tokens.`);
  });
}
