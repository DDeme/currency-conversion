import type { Meta, StoryObj } from "@storybook/react";
import { SwitchCurrencyButton } from "./SwitchCurrencyButton";
import { userEvent, within } from "@storybook/testing-library";

const meta: Meta<typeof SwitchCurrencyButton> = {
  component: SwitchCurrencyButton,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole("button");

    await userEvent.click(submitButton);
  },
};

export default meta;

export const Default: StoryObj<typeof SwitchCurrencyButton> = {};
export const Disabled: StoryObj<typeof SwitchCurrencyButton> = {
  args: {
    isDisabled: true,
  },
};
