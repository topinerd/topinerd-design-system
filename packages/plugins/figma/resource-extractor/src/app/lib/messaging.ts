import type { ActionType } from "../../shared/types/action";
import type { Message } from "../../shared/types/plugin";

export function postMessageToPlugin<T extends ActionType>(message: Message<T>) {
  parent.postMessage({ pluginMessage: message, pluginId: "*" }, "*");
}
