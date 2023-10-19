import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const SubmitButton = ({
  children = "Convert",
  loadingText = "Converting ...",
  ...props
}: Pick<
  ButtonProps,
  "isLoading" | "isDisabled" | "loadingText" | "children"
>) => {
  return (
    <Button
      width="100%"
      colorScheme="blue"
      variant="outline"
      type="submit"
      loadingText={loadingText}
      {...props}
    >
      {children}
    </Button>
  );
};
