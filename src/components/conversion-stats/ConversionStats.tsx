import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

export const ConversionStats = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Most popular destination currency</StatLabel>
        <StatNumber>$ USD</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total amount converted</StatLabel>
        <StatNumber>345,670 $</StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total conversions</StatLabel>
        <StatNumber>345,670</StatNumber>
      </Stat>
    </StatGroup>
  );
};
