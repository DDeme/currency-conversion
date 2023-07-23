import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const SubmitButton = ({
  children = "Convert",
  loadingText = "Converting ...",
  ...props
}: ButtonProps) => {
  return (
    <Button
      width="100%"
      colorScheme="purple"
      variant="outline"
      type="submit"
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
};
