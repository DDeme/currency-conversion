import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import React from "react";

type Props = {
  data: {
    amount: number;
    result: number | null;
    quote: number | null;
    fromSymbol: string;
    toSymbol: string;
    fromCurrencyName: string;
    fromCode: string;
    toCode: string;
  };
  isLoading: boolean;
};

const NumberFormatter = new Intl.NumberFormat("en-US");

export const ConversionResult = ({
  data: { amount, result, fromCurrencyName, toSymbol, quote, fromCode, toCode },
  isLoading,
}: Props) => {
  return (
    <Stat mt={5}>
      <StatLabel>
        <Flex>
          {isLoading ? (
            <Skeleton height="0.75rem" mt={1} mr={1} width="37px" />
          ) : (
            NumberFormatter.format(amount)
          )}{" "}
          {fromCurrencyName} =
        </Flex>
      </StatLabel>
      <StatNumber>
        <Flex>
          {isLoading ? (
            <Skeleton height="1.45rem" mr={2} mt={1.5} width="85px" />
          ) : (
            result
          )}{" "}
          {toSymbol}
        </Flex>
      </StatNumber>
      <StatHelpText>
        <Flex>
          1 {fromCode} ={" "}
          {isLoading ? (
            <Skeleton height="1.1rem" mx={2} mt={0.5} width="46px" />
          ) : (
            quote
          )}{" "}
          {toCode}
        </Flex>
      </StatHelpText>
    </Stat>
  );
};
