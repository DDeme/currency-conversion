import type { Meta, StoryObj } from "@storybook/react";
import { ConversionForm } from "./ConversionForm";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect, jest } from "@storybook/jest";

const meta: Meta<typeof ConversionForm> = {
  component: ConversionForm,
  args: {
    onSubmit: jest.fn(),
    defaultValues: {
      amount: 1000,
      from: "CZK",
      to: "EUR",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ConversionForm> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const amountInput = canvas.getByDisplayValue("1,000");

    // test values should not be empty
    await userEvent.type(
      amountInput,
      "{backspace}{backspace}{backspace}{backspace}{backspace}122"
    );

    const fromLabel = await canvas.findByText("From");

    await userEvent.click(fromLabel);
    await userEvent.type(fromLabel, "AED{enter}");

    const switchButton = await canvas.findByTestId("SwitchCurrencyButton");
    await userEvent.click(switchButton);
    const submitButton = await canvas.findByText("Convert");

    await userEvent.click(submitButton);

    await waitFor(async () => {
      await expect(args.onSubmit).toHaveBeenCalledTimes(1);
      await expect(args.onSubmit.mock.calls[0][0]).toEqual({
        amount: 122,
        from: "EUR",
        to: "AED",
      });
    });
  },
};
export const Disabled: StoryObj<typeof ConversionForm> = {
  args: {
    isDisabled: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = await canvas.findByText("Convert");

    await userEvent.click(submitButton);

    await waitFor(async () => {
      await expect(args.onSubmit).toHaveBeenCalledTimes(0);
    });
  },
};
export const Loading: StoryObj<typeof ConversionForm> = {
  args: {
    isLoading: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = await canvas.findByText("Converting ...");

    await userEvent.click(submitButton);

    await waitFor(async () => {
      await expect(args.onSubmit).toHaveBeenCalledTimes(0);
    });
  },
};
