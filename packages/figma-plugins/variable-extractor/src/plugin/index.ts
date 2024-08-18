import { ExtractTokenAction } from "../types/action";
import { AppMessage } from "../types/plugin";
import { TokenFile, TokenValue } from "../types/token";
import { responseExtractTokensToUI } from "./lib/messaging";
import { isRGBA, isVariableAlias, rgbToHex } from "./utils";

figma.showUI(__html__);

figma.ui.onmessage = async (message: AppMessage<ExtractTokenAction>) => {
  if (message.type === "extractTokens") {
    const files = await extractTokens();
    console.log("response to ui");
    responseExtractTokensToUI(files);
  }
};

async function extractTokens() {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const files = [];

  for (const collection of collections) {
    files.push(...(await processCollection(collection)));
  }

  console.log("files: ", files);

  return files;
}

async function processCollection({
  name,
  modes,
  variableIds,
}: VariableCollection) {
  const files: TokenFile[] = [];

  for (const mode of modes) {
    const file: TokenFile = {
      fileName:
        modes.length === 1
          ? `${name}.tokens.json`
          : `${name}.${mode.name}.tokens.json`,
      body: {},
    };

    for (const variableId of variableIds) {
      const { name, resolvedType, valuesByMode } =
        await figma.variables.getVariableByIdAsync(variableId);
      const value = valuesByMode[mode.modeId];

      file.body[name.replace(/\//g, ".")] = {
        ...(await createToken(resolvedType, value)),
      };
    }

    files.push(file);
  }

  return files;
}

async function createToken(
  resolvedType: VariableResolvedDataType,
  value: VariableValue
): Promise<TokenValue | null> {
  switch (resolvedType) {
    case "BOOLEAN":
    case "STRING":
    case "COLOR":
      if (isRGBA(value)) {
        return { $type: "COLOR", $value: rgbToHex(value) };
      }
      break;
    case "FLOAT":
      if (typeof value === "number") {
        return { $type: "FLOAT", $value: value };
      }
      break;
    default:
      throw Error(`Unsupported type: ${resolvedType}`);
  }

  if (isVariableAlias(value)) {
    const { name } = await figma.variables.getVariableByIdAsync(value.id);
    return { $type: resolvedType, $value: `{${name.replace(/\//g, ".")}}` };
  }

  return null;
}
