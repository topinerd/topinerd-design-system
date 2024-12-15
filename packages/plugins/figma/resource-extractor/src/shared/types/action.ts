import { ACTION } from "../constants";

import type { FileData } from "./data";
import type { TokenBody } from "./token";

export type ResponseStatus = "error" | "success";

export type ActionKey = keyof typeof ACTION;
export type ActionType = (typeof ACTION)[ActionKey];
export type ActionTypeMap = {
  [Value in (typeof ACTION)[keyof typeof ACTION]]: Value;
};

export type ExtractTokenActionPayload = FileData<TokenBody>[];
export type ExtractIconActionPayload = FileData<string>[] | undefined;
export type ActionPayload =
  | ExtractTokenActionPayload
  | ExtractIconActionPayload;
export type ActionPayloadMap = {
  [ACTION.EXTRACT_TOKEN]: ExtractTokenActionPayload;
  [ACTION.EXTRACT_ICON]: ExtractIconActionPayload;
};
