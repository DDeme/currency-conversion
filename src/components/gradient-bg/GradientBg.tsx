import { Box, BoxProps } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";

export const GradientBg = ({
  children,
  ...props
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box
      w="100%"
      h="100%"
      bgGradient="linear(to-tr, gray.900, #31364a)"
      {...props}
    >
      {children}
    </Box>
  );
};
//
//
// #31364a
