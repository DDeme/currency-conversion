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
      bgGradient="linear(to-t, gray.900, blue.800)"
      {...props}
    >
      {children}
    </Box>
  );
};
