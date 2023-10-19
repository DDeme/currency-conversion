import type { Meta, StoryObj } from "@storybook/react";
import { StatResult } from "./StatResult";
import { Skeleton } from "@chakra-ui/react";

const meta: Meta<typeof StatResult> = {
  component: StatResult,
};

export default meta;

export const Default: StoryObj<typeof StatResult> = {
  args: {
    title: "Most popular currency",
    children: "EUR",
  },
};

export const WithSkeleton: StoryObj<typeof StatResult> = {
  args: {
    title: "Most popular currency",
    children: <Skeleton height="1.5rem" mt={2} mb={2} width="50px" />,
  },
};
