import type { ComponentStory, Meta, StoryObj } from "@storybook/react";
import { CurrencySelectField } from "./CurrencySelectField";
import { useForm } from "react-hook-form";

const meta: Meta<typeof CurrencySelectField> = {
  component: CurrencySelectField,
};

export default meta;

interface FormValues {
  currency: string;
}

export const Default: StoryObj<typeof CurrencySelectField> = {};
