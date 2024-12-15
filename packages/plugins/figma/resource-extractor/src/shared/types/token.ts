export type TokenValue = {
  $type: VariableResolvedDataType;
  $value: VariableValue;
};

export type TokenBody = {
  [key: string]: TokenBody | TokenValue;
};
