import "@topinerd/preset/theme.css";
import "@topinerd/react/index.css";
import { theme } from "@topinerd/preset";

import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    const themeClass =
      context.globals.theme === "dark" ? theme.darkTheme : theme.lightTheme;
    return (
      <div className={themeClass}>
        <Story />
      </div>
    );
  },
];

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      showName: true,
    },
  },
};

export default preview;
