import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
};

export default meta;

export const Default: StoryObj<typeof SubmitButton> = {};
export const Disabled: StoryObj<typeof SubmitButton> = {
  args: {
    isDisabled: true,
  },
};
export const Loading: StoryObj<typeof SubmitButton> = {
  args: {
    isLoading: true,
  },
};
