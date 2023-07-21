import {
  Skeleton,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";

export const ConversionStatsSkeleton = () => {
  return (
    <StatGroup>
      <Stat>
        <StatLabel>Most popular currency</StatLabel>
        <StatNumber>
          <Skeleton height="1.5rem" mt={2} mb={2} width="50px" />
        </StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total amount converted</StatLabel>
        <StatNumber>
          <Skeleton height="1.5rem" mt={2} mb={2} width="80px" />
        </StatNumber>
      </Stat>
      <Stat>
        <StatLabel>Total conversions</StatLabel>
        <StatNumber>
          <Skeleton height="1.5rem" mt={2} mb={2} width="120px" />
        </StatNumber>
      </Stat>
    </StatGroup>
  );
};
