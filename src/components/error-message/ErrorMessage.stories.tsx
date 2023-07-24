import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
};

export default meta;

export const Default: StoryObj<typeof ErrorMessage> = {};
