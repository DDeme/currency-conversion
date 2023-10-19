import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import React from "react";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: <>Some child content</>,
  },
};

const ComponentWithError = () => {
  throw new Error("Whoops!");
  return <>some text and error</>;
};

export const Error: StoryObj<typeof Card> = {
  args: {
    children: <ComponentWithError />,
  },
};
