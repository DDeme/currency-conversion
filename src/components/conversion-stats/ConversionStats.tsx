import { Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";

interface props {
  totalConversions: number;
  totalAmountInUSD: number;
  mostPopularDestinationCurrency: string;
}

const USDIntl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const ConversionStats = ({
  mostPopularDestinationCurrency,
  totalAmountInUSD,
  totalConversions,
}: props) => {
  return (
    <StatGroup flexDirection={{ base: "column", sm: "row" }} gap={5}>
      <Stat>
        <StatLabel>Most popular currency</StatLabel>
        <StatNumber>{mostPopularDestinationCurrency}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total amount converted</StatLabel>
        <StatNumber>{USDIntl.format(totalAmountInUSD)}</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total conversions</StatLabel>
        <StatNumber>{totalConversions}</StatNumber>
      </Stat>
    </StatGroup>
  );
};
