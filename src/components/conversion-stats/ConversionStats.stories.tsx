import type { Meta, StoryObj } from "@storybook/react";
import { ConversionStats } from "./ConversionStats";

const meta: Meta<typeof ConversionStats> = {
  component: ConversionStats,
};

export default meta;

export const Default: StoryObj<typeof ConversionStats> = {
  args: {
    totalConversions: 2,
    totalAmountInUSD: 1000000.123456,
    mostPopularDestinationCurrency: "USD",
  },
};