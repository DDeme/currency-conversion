import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  value: number | null;
  onChange: (value: number | null) => void;
}

export const CurrencyInput = ({ value, onChange }: Props) => {
  const format = (val: number | null) => (val ? `$` + val : 0);
  // TODO: return null as empty value
  const parse = (val: string) => parseInt(val.replace(/^\$/, ""));

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
