import React, { PropsWithChildren } from "react";
import { GradientBg } from "../gradient-bg";
import { Container, Flex } from "@chakra-ui/react";

export const AppContainer = ({ children }: PropsWithChildren) => {
  return (
    <GradientBg as={"main"}>
      <Container maxW="container.sm">
        <Flex
          pt={10}
          pb={10}
          minHeight={"100vh"}
          direction={"column"}
          gap={10}
          justifyContent={"center"}
        >
          {children}
        </Flex>
      </Container>
    </GradientBg>
  );
};
