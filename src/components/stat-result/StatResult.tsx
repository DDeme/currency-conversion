import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  title: string;
};

export const StatResult = ({ title, children }: Props) => {
  return (
    <Stat>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{children}</StatNumber>
    </Stat>
  );
};
