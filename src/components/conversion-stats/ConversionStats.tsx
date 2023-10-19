import { StatGroup } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { StatResult } from "../stat-result";

type ConversionStat = {
  title: string;
  value: string | ReactNode;
};

type Props = {
  conversionStats: ConversionStat[];
};

export const ConversionStats = ({ conversionStats }: Props) => {
  return (
    <StatGroup flexDirection={{ base: "column", sm: "row" }} gap={5}>
      {conversionStats.map(({ title, value }) => (
        <StatResult key={title} title={title}>
          {value}
        </StatResult>
      ))}
    </StatGroup>
  );
};
