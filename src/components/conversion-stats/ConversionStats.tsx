import { Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";

interface props {
  totalConversions: number;
  totalAmountInUSD: number;
  mostPopularDestinationCurrency: string;
}

export const ConversionStats = ({
  mostPopularDestinationCurrency,
  totalAmountInUSD,
  totalConversions,
}: props) => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Most popular currency</StatLabel>
        <StatNumber>{mostPopularDestinationCurrency}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total amount converted</StatLabel>
        <StatNumber>{totalAmountInUSD} $</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total conversions</StatLabel>
        <StatNumber>{totalConversions}</StatNumber>
      </Stat>
    </StatGroup>
  );
};
