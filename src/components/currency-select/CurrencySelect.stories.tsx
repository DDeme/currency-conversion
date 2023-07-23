import type { Meta, StoryObj } from "@storybook/react";
import { CurrencySelect } from "./CurrencySelect";

const meta: Meta<typeof CurrencySelect> = {
  component: CurrencySelect,
};

export default meta;

export const Default: StoryObj<typeof CurrencySelect> = {};
export const SelectedValue: StoryObj<typeof CurrencySelect> = {
  args: {
    value: "CZK",
  },
};
