import { Button } from "@chakra-ui/react";
import React from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";

interface Props {
  onClick: () => void;
}

export const SwitchCurrencyButton = ({ onClick }: Props) => {
  return (
    <Button
      width="auto"
      colorScheme="blue"
      variant="outline"
      rounded="xl"
      size="md"
      onClick={() => {
        onClick();
      }}
    >
      <HiOutlineSwitchVertical />
    </Button>
  );
};
