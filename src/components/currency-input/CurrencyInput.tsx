import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  value: string | null;
  onChange: (value: string | null) => void;
}

export const CurrencyInput = ({ value, onChange }: Props) => {
  const format = (val: string | null) => `$` + val;
  const parse = (val: string) => val.replace(/^\$/, "");

  return (
    <NumberInput
      onChange={(valueString) => onChange(parse(valueString))}
      value={format(value)}
      min={0}
      w={"100%"}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
