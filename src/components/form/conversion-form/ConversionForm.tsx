import { Flex } from "@chakra-ui/react";
import React from "react";
import { CurrencyField } from "../fields/currency-field";
import { useForm } from "react-hook-form";
import { CurrencySelectField } from "../fields/currency-select-field";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SubmitButton } from "../../submit-button";
import { SwitchCurrencyButton } from "../../switch-curerncy-button";

type Props = {
  onSubmit: (val: z.infer<typeof schema>) => void;
  onChange: (val: z.infer<typeof schema>) => void;
  defaultValues: z.infer<typeof schema>;
  isDisabled: boolean;
  isLoading: boolean;
};

export const ConversionForm = ({
  onSubmit,
  isDisabled,
  isLoading,
  defaultValues,
}: Props) => {
  const { handleSubmit, control, setValue, getValues } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  });

  const fieldProps = {
    control,
    isDisabled: isDisabled || isLoading,
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
        <Flex justifyContent={"center"}>
          <SwitchCurrencyButton
            onClick={() => {
              const { from, to } = getValues();
              setValue("from", to);
              setValue("to", from);
            }}
            isDisabled={isDisabled || isLoading}
          />
        </Flex>
        <CurrencySelectField name={"to"} label="To" {...fieldProps} />
        <SubmitButton isLoading={isLoading} isDisabled={isDisabled} />
      </Flex>
    </form>
  );
};
