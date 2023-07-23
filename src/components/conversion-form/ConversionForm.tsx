import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { CurrencyField } from "../currency-field";
import { useForm } from "react-hook-form";
import { CurrencySelectField } from "../currency-select-field";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

interface props {
  onSubmit: (val: unknown) => void;
  isDisabled: boolean;
}

export const ConversionForm = ({ onSubmit }: props) => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: {
      amount: 1000,
      from: "CZK",
      to: "EUR",
    },
  });

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
        <CurrencySelectField
          name={"from"}
          label="From"
          control={control}
          isRequired
        />
        {/* TODO: add switch currencies button */}
        <CurrencySelectField
          name={"to"}
          label="To"
          control={control}
          isRequired
        />
        {/* //TODO: add to separate submit component  */}
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
