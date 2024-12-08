import { ACTION } from "../shared/constants";
import { extractTokens } from "./action/extract-token";
import { postMessageToIFrame } from "./lib/messaging";

import type { Message } from "../shared/types/plugin";

figma.showUI(__html__);

figma.ui.onmessage = async (message: Message) => {
  console.log(message.type);

  /**
   * handle extract token action
   */
  if (message.type === ACTION.EXTRACT_TOKEN) {
    extractTokens()
      .then(files => postMessageToIFrame("success", message.type, files))
      .catch(_ => postMessageToIFrame("error", message.type));
  }

  /**
   * handle extract icon action
   */
  if (message.type === ACTION.EXTRACT_ICON) {
    // extractIcons();
  }

  /**
   * handle unregisterd action
   */
  postMessageToIFrame("error", ACTION.UNREGISTERD);
};
