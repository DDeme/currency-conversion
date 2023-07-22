import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

export const Default: StoryObj<typeof Header> = {};
