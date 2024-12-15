import { ACTION } from "../shared/constants";
import { extractTokens } from "./action/extract-token";
import { extractIcons } from "./action/extract-icon";
import { postMessageToIFrame } from "./lib/messaging";

import type { Message } from "../shared/types/plugin";

figma.showUI(__html__);

figma.currentPage.selection = [figma.createFrame()];

/**
 * Triggered when an action originates directly from the plugin itself.
 */
figma.on("selectionchange", async () => {
  /**
   * handle extract icon action
   */
  extractIcons()
    .then(icons => postMessageToIFrame("success", ACTION.EXTRACT_ICON, icons))
    .catch(_ => postMessageToIFrame("error", ACTION.EXTRACT_ICON));
});

/**
 * Triggered when an action originates from the UI.
 * @param message - The message sent from the UI.
 */
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
   * handle unregisterd action
   */
  postMessageToIFrame("error", ACTION.UNREGISTERD);
};
