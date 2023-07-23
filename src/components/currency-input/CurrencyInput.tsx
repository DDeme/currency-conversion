import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import React from "react";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const CurrencyInput = ({ value, onChange }: Props) => {
  const NumberFormatter = new Intl.NumberFormat("en-US");
  const format = (val: number) => NumberFormatter.format(val);
  const parse = (val: string) => {
    const parsed = parseFloat(val.replace(/^\$/, ""));
    return isNaN(parsed) ? 0 : parsed;
  };

  return (
    <NumberInput
      onChange={(valueString) => onChange(parse(valueString))}
      value={format(value)}
      inputMode="decimal"
      precision={2}
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
