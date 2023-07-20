"use client";
import {
  Card,
  Text,
  CardBody,
  Heading,
  Container,
  Box,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CurrencyInput } from "@/components/currency-input/CurrencyInput";
import { ConversionResult } from "@/components/conversion-result/ConversionResult";
import { GradientBg } from "@/components/gradient-bg";
import { ConversionStats } from "@/components/conversion-stats";
import { CurrencySelect } from "@/components/currency-select";

export default function Home() {
  return (
    <GradientBg>
      <main>
        <Container maxW="container.md">
          <Flex p={4} h={"100vh"} direction={"column"} gap={10}>
            <Box>
              <Heading color={"gray.100"}>Conversion app</Heading>
              <Text color={"gray.100"}>
                Best source for currency conversion and exchange rates
              </Text>
            </Box>
            <Card>
              <CardBody>
                <Text>Amount</Text>
                <CurrencyInput />
                <Text>From:</Text>
                <CurrencySelect />
                <Text>To:</Text>
                <CurrencySelect />
                <ConversionResult />
                <Button colorScheme="purple" variant="outline">
                  Convert
                </Button>
              </CardBody>
            </Card>
            <Spacer />
            <Card mb={10}>
              <CardBody>
                <ConversionStats />
              </CardBody>
            </Card>
          </Flex>
        </Container>
      </main>
    </GradientBg>
  );
}
