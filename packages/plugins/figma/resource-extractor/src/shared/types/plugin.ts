import type { ActionPayload, ActionType, ResponseStatus } from "./action";

/**
 * A structure representing a message with a specific action type T and an optional payload K.
 * The `status` field can be used to indicate the result of the message processing.
 */
export type Message<
  T extends ActionType = ActionType,
  K extends ActionPayload = ActionPayload,
> = {
  /**
   * The action type of the message.
   */
  type: T;

  /**
   * An optional payload associated with the message.
   */
  payload?: K;

  /**
   * The status of the message processing result.
   * @description This property is only used when sending messages from the **plugin** to the **UI**.
   */
  status?: ResponseStatus;
};

/**
 * Represents the type of message passed to `figma.ui.postMessage`.
 * The `pluginMessage` field encapsulates the actual `Message<T, K>` payload,
 * making the communication between the Figma plugin and its UI more explicit.
 */
export type PluginMessage<
  T extends ActionType = ActionType,
  K extends ActionPayload = ActionPayload,
> = {
  /**
   * The message data sent to the plugin.
   */
  pluginMessage: Message<T, K>;
};
