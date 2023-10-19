import React, { PropsWithChildren } from "react";
import {
  Card as ChakraCard,
  CardBody as ChakraCardBody,
  SlideFade,
} from "@chakra-ui/react";
import { ErrorBoundary } from "../error-boudary";
import { ErrorMessage } from "../error-message";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <SlideFade in offsetY="20px">
      <ChakraCard>
        <ChakraCardBody>
          <ErrorBoundary fallback={<ErrorMessage />}>{children}</ErrorBoundary>
        </ChakraCardBody>
      </ChakraCard>
    </SlideFade>
  );
};
