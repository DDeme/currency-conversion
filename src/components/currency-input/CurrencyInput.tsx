import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import React from "react";
import { FieldValues } from "react-hook-form";
import { FormFieldProps } from "../form-field";

export const CurrencyInput = <FormValues extends FieldValues>(
  props: FormFieldProps<FormValues>
) => {
  const format = (val: string) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  const [value, setValue] = React.useState("1.53");

  return (
    <NumberInput
      onChange={(valueString) => setValue(parse(valueString))}
      value={value}
      min={0}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
