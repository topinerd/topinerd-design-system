import type {
  ActionPayload,
  ActionType,
  ResponseStatus,
} from "../../shared/types/action";

export function postMessageToIFrame(
  status: ResponseStatus,
  type: ActionType,
  payload?: ActionPayload,
) {
  figma.ui.postMessage({
    type,
    payload,
    status,
  });
}
