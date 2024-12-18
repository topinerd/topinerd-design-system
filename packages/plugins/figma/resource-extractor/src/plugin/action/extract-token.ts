import { isVariableAlias } from "../utils";
import { isRGBA, rgbToHex } from "../../shared/utils/color";
import { convertToNested } from "../../shared/utils/obj";

import type { FileData } from "../../shared/types/data";
import type { TokenBody, TokenValue } from "../../shared/types/token";

/**
 * Generates token file data from a given VariableCollection.
 * @param collection - The VariableCollection containing modes, variable IDs, and metadata.
 * @returns A Promise resolving to a TokenFile object containing tokens structured by mode and variable.
 *
 * This function processes all variables within a collection and generates a structured JSON file representation.
 * - Each variable is resolved by its ID, and its value is mapped to a token.
 * - If the collection has only one mode, the mode key is excluded, and the value is directly assigned.
 * - If the collection has multiple modes, each mode's name is used as a key, and the token value is nested under it.
 */
async function generateFileData(
  collection: VariableCollection,
): Promise<FileData<TokenBody>> {
  const file: FileData<TokenBody> = {
    fileName: `token.${collection.name}.json`,
    body: {},
  };

  for (const mode of collection.modes) {
    for (const variableId of collection.variableIds) {
      const variable = await figma.variables.getVariableByIdAsync(variableId);

      if (variable) {
        const { name, resolvedType, valuesByMode } = variable;
        const value = valuesByMode[mode.modeId];

        if (value) {
          const token = await createToken(resolvedType, value);

          if (token) {
            if (collection.modes.length > 1) {
              // file.body[name.replace(/\//g, ".")] = {
              //   ...file.body[name.replace(/\//g, ".")],
              //   [mode.name]: token,
              // };
              file.body[name.replace(/\//g, ".")] = Object.assign(
                {},
                file.body[name.replace(/\//g, ".")],
                { [mode.name]: token },
              );
            } else {
              file.body[name.replace(/\//g, ".")] = token;
            }
          }
        }
      }
    }
  }

  return file;
}

/**
 * Creates a token object based on the resolved type and value.
 * @param resolvedType - The type of the variable (e.g., "BOOLEAN", "STRING", "COLOR", "FLOAT").
 * @param value - The value of the variable, which can be a direct value or an alias.
 * @returns A Promise that resolves to a TokenValue object or null if the value cannot be processed.
 */
async function createToken(
  resolvedType: VariableResolvedDataType,
  value: VariableValue,
): Promise<TokenValue | null> {
  switch (resolvedType) {
    case "BOOLEAN":
      return { $type: "BOOLEAN", $value: value };
    case "STRING":
      return { $type: "STRING", $value: value };
    case "COLOR":
      if (isRGBA(value)) {
        return { $type: "COLOR", $value: rgbToHex(value) };
      }
      break;
    case "FLOAT":
      return { $type: "FLOAT", $value: value };
    default:
      throw Error(`Unsupported type: ${resolvedType}`);
  }

  if (isVariableAlias(value)) {
    const variable = await figma.variables.getVariableByIdAsync(value.id);

    if (variable) {
      return {
        $type: resolvedType,
        $value: `{${variable.name.replace(/\//g, ".")}}`,
      };
    }
  }

  return null;
}

/**
 * Extracts tokens from Figma's local variable collections and converts them to a structured format.
 * @returns {Promise<FileData[]>} An array of token files with nested structures.
 */
export async function extractTokens(): Promise<FileData<TokenBody>[]> {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();

  // return await Promise.all(collections.map(generateFileData)).then(files =>
  //   files.map(file => ({
  //     ...file,
  //     body: convertToNested(file.body),
  //   })),
  // );

  const files: FileData<TokenBody>[] = [];

  for (const collection of collections) {
    files.push(await generateFileData(collection));
  }

  files.forEach(file => {
    file.body = convertToNested(file.body);
  });

  return files;
}
