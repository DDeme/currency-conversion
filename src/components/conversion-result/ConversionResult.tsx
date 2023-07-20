import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";
import React from "react";

interface props {
  result: number;
  currencySignTo: string;
  fromFullCurrencyString: string;
  from: string;
  to: string;
}

export const ConversionResult = () => {
  return (
    <Stat mt={10} mb={10}>
      <StatLabel>1.00 US Dollar =</StatLabel>
      <StatNumber>£2.00</StatNumber>
      <StatHelpText>1 EUR = 1.11833 USD</StatHelpText>
    </Stat>
  );
};
