import React, { PropsWithChildren } from "react";
import {
  Card as ChakraCard,
  CardBody as ChakraCardBody,
} from "@chakra-ui/react";
import { ErrorBoundary } from "../error-boudary";
import { ErrorMessage } from "../error-message";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <ChakraCard>
      <ChakraCardBody>
        <ErrorBoundary fallback={<ErrorMessage />}>{children}</ErrorBoundary>
      </ChakraCardBody>
    </ChakraCard>
  );
};
