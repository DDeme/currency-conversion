import type { Meta, StoryObj } from "@storybook/react";
import { AppContainer } from "./AppContainer";

const meta: Meta<typeof AppContainer> = {
  component: AppContainer,
};

export default meta;

export const Default: StoryObj<typeof AppContainer> = {};
