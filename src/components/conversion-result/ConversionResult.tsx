import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import React from "react";

interface Props {
  amount: number;
  result: number;
  quote: number;
  fromSymbol: string;
  toSymbol: string;
  fromCurrencyName: string;
  fromCode: string;
  toCode: string;
}

export const ConversionResult = ({
  amount,
  result,
  fromCurrencyName,
  toSymbol,
  quote,
  fromCode,
  toCode,
}: Props) => {
  const NumberFormatter = new Intl.NumberFormat("en-US");
  return (
    <Stat mt={5}>
      <StatLabel>
        {NumberFormatter.format(amount)} {fromCurrencyName} =
      </StatLabel>
      <StatNumber>
        {result} {toSymbol}
      </StatNumber>
      <StatHelpText>
        1 {fromCode} = {quote} {toCode}
      </StatHelpText>
    </Stat>
  );
};
