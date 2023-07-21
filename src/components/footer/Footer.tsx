import { Link as ChakraLink, Flex } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <Flex
      p={5}
      color={"whiteAlpha.900"}
      gap={10}
      alignItems="center"
      justifyContent={"center"}
    >
      <ChakraLink as={Link} href="https://demecko.com/">
        demecko.com
      </ChakraLink>
      <ChakraLink as={Link} href="https://github.com/DDeme/currency-conversion">
        Source on Github
      </ChakraLink>
    </Flex>
  );
};
