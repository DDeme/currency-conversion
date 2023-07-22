import type { Meta, StoryObj } from "@storybook/react";
import { ConversionResult } from "./ConversionResult";

const meta: Meta<typeof ConversionResult> = {
  component: ConversionResult,
};

export default meta;

export const Default: StoryObj<typeof ConversionResult> = {
  args: {
    amount: 1250,
    result: 1124.29,
    quote: 0.89869,
    fromCurrencyName: "US Dollar",
    toSymbol: "€",
    fromCode: "USD",
    toCode: "EUR",
  },
};
