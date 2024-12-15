/**
 * Checks if a value is a VariableAlias object.
 * @param value - The value to check.
 * @returns True if the value is a VariableAlias, false otherwise.
 */
export function isVariableAlias(value: unknown): value is VariableAlias {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const hasType =
    "type" in value && (value as VariableAlias).type === "VARIABLE_ALIAS";
  const hasId =
    "id" in value && typeof (value as VariableAlias).id === "string";

  return hasType && hasId;
}
