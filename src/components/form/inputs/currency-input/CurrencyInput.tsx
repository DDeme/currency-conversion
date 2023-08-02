import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import React from "react";
import { Input } from "@chakra-ui/react";
import { unknown } from "zod";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const defaultMaskOptions = {
  prefix: "",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
  inputMode: "numeric",
};

const deMask = (value: string): number =>
  value ? parseFloat(value.replace(/[^0-9.]/g, "")) : 0;

export const CurrencyInput = ({ value, onChange }: Props) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
  });
  return (
    <MaskedInput
      mask={currencyMask}
      value={value}
      onChange={(event) => {
        onChange(deMask(event.target.value));
      }}
      render={(ref, props) => (
        <Input
          ref={ref as unknown as React.LegacyRef<HTMLInputElement> | undefined}
          {...props}
        />
      )}
    />
  );
};
