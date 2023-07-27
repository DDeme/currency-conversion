import { Button, Text, Flex, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import fixingBugs from "../../../public/fixing_bugs.svg";
import Image from "next/image";

export const ErrorMessage = () => {
  return (
    <Flex p="6" align="center" justify="center" gap="12">
      <Image
        src={fixingBugs}
        alt="error illustration"
        width="110"
        height="110"
      />
      <VStack alignItems="start" gap="2">
        <Heading color="blue.700" size="xs">
          There was an error
        </Heading>
        <Text>We are working to getting this fixed</Text>
        <Link href="/" passHref>
          <Button colorScheme="blue" variant={"outline"} size="sm">
            Back to home
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
};
