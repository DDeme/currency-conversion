import type { Meta, StoryObj } from "@storybook/react";
import { CurrencyInput } from "./CurrencyInput";

const meta: Meta<typeof CurrencyInput> = {
  component: CurrencyInput,
};

export default meta;

export const Default: StoryObj<typeof CurrencyInput> = {};
export const SelectedValue: StoryObj<typeof CurrencyInput> = {
  args: {
    value: "CZK",
  },
};
