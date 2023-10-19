import { Button, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";

type Props = {
  onClick: () => void;
  isDisabled: boolean;
};

export const SwitchCurrencyButton = (props: Props) => {
  return (
    <Button
      width="auto"
      colorScheme="blue"
      variant="outline"
      rounded="xl"
      size="md"
      data-testid="SwitchCurrencyButton"
      {...props}
    >
      <HiOutlineSwitchVertical />
      <VisuallyHidden>Switch Currency</VisuallyHidden>
    </Button>
  );
};
