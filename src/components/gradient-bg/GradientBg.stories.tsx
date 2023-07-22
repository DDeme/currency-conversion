import type { Meta, StoryObj } from "@storybook/react";
import { GradientBg } from "./GradientBg";

const meta: Meta<typeof GradientBg> = {
  component: GradientBg,
};

export default meta;

export const Default: StoryObj<typeof GradientBg> = {
  args: {
    children: <div style={{ height: "10rem", width: "10rem" }}></div>,
  },
};
