import React from "react";
import * as Icons from ".";
import type { Meta, StoryObj } from "@storybook/react";

const iconNames = Object.keys(Icons);

const meta = {
  title: "Primitive/Icons",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllIcons: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {iconNames.map(iconName => {
          const IconComponent = Icons[iconName as keyof typeof Icons];
          return (
            <div
              key={iconName}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "120px",
              }}
            >
              <IconComponent
                width={24}
                height={24}
                fill="black"
                stroke="black"
              />
              <span
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {iconName}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
};
