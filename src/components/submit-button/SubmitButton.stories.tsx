import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "./SubmitButton";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
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
