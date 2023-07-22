import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { CurrencyField } from "../currency-field";
import { useForm } from "react-hook-form";

interface props {
  onSubmit: (val: unknown) => void;
  isDisabled: boolean;
}

export const ConversionForm = ({ onSubmit }: props) => {
  const { handleSubmit, control, formState, reset } = useForm({});

  return (
    <form
      noValidate
      onSubmit={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
    >
      <Flex flexDirection="column" gap="5">
        <CurrencyField
          name={"amount"}
          label="Amount"
          control={control}
          isRequired
        />
        <Button
          width="100%"
          colorScheme="purple"
          variant="outline"
          type="submit"
        >
          Convert
        </Button>
      </Flex>
    </form>
  );
};
