import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { CurrencyField } from "../currency-field";
import { useForm } from "react-hook-form";
import { CurrencySelectField } from "../currency-select-field";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitButton } from "../submit-button";

interface Props {
  onSubmit: (val: z.infer<typeof schema>) => void;
  isDisabled: boolean;
  isLoading: boolean;
}

export const ConversionForm = ({ onSubmit, isDisabled, isLoading }: Props) => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      amount: 1,
      from: "CZK",
      to: "EUR",
    },
  });

  const fieldProps = {
    control,
    isDisabled,
    isRequired: true,
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
    >
      <Flex flexDirection="column" gap="5">
        <CurrencyField name={"amount"} label="Amount" {...fieldProps} />
        <CurrencySelectField name={"from"} label="From" {...fieldProps} />
        {/* TODO: add switch currencies button */}
        <CurrencySelectField name={"to"} label="To" {...fieldProps} />
        <SubmitButton isLoading={isLoading} isDisabled={isDisabled} />
      </Flex>
    </form>
  );
};
