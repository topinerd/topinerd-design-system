import "@topinerd-design-system/preset/theme.css";
import "@topinerd-design-system/react/style.css";

import type { Preview } from "@storybook/react";

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

// export const decorators = [
//   (Story, context) => {
//     const themeClass =
//       context.globals.theme === "dark" ? theme.mode.dark : theme.mode.light;
//     return (
//       <div className={themeClass}>
//         <Story />
//       </div>
//     );
//   },
// ];

// export const globalTypes = {
//   theme: {
//     name: "Theme",
//     description: "Global theme for components",
//     defaultValue: "light",
//     toolbar: {
//       icon: "circlehollow",
//       items: [
//         { value: "light", title: "Light" },
//         { value: "dark", title: "Dark" },
//       ],
//       showName: true,
//     },
//   },
// };

export default preview;
