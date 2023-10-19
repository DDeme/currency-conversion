import type { Meta, StoryObj } from "@storybook/react";
import { ConversionStats } from "./ConversionStats";
import { Skeleton } from "@chakra-ui/react";

const meta: Meta<typeof ConversionStats> = {
  component: ConversionStats,
};

export default meta;

export const Default: StoryObj<typeof ConversionStats> = {
  args: {
    conversionStats: [
      {
        title: "Most popular currency",
        value: "EUR",
      },
      {
        title: "Total amount converted",
        value: "$293,910.56",
      },
      {
        title: "Total amount converted",
        value: "1000",
      },
    ],
  },
};

export const LoadingSkeleton: StoryObj<typeof ConversionStats> = {
  args: {
    conversionStats: [
      {
        title: "Most popular currency",
        value: <Skeleton height="1.5rem" mt={2} mb={2} width="50px" />,
      },
      {
        title: "Total amount converted",
        value: <Skeleton height="1.5rem" mt={2} mb={2} width="80px" />,
      },
      {
        title: "Total amount converted",
        value: <Skeleton height="1.5rem" mt={2} mb={2} width="120px" />,
      },
    ],
  },
};
