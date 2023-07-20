import { Box } from "@chakra-ui/layout";
import React, { PropsWithChildren } from "react";

export const GradientBg = ({ children }: PropsWithChildren) => {
  return (
    <Box w="100%" h="100%" bgGradient="linear(to-t, gray.900, purple.600)">
      {children}
    </Box>
  );
};
