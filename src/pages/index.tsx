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
import {
  ConversionStats,
  ConversionStatsSkeleton,
} from "@/components/conversion-stats";
import { CurrencySelect } from "@/components/currency-select";
import { useQuery } from "@tanstack/react-query";
import { CurrencyField } from "@/components/currency-field";
import { useForm } from "react-hook-form";
import { Footer } from "@/components/footer";

async function getData() {
  const res = await fetch("/api/stats");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  debugger;
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  //const data = await getData();
  const {
    isLoading,
    isError,
    data: stats,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getData,
  });
  const { control } = useForm();
  return (
    <GradientBg>
      <main>
        <Container maxW="container.md">
          <Flex p={4} h={"100vh"} direction={"column"} gap={10}>
            <Box>
              <Heading color={"gray.100"}>Purple Currency Conversion</Heading>
              <Text color={"gray.100"}>
                Best source for currency conversion and exchange rates
              </Text>
            </Box>
            <Card>
              <CardBody>
                <form
                  noValidate
                  // onSubmit={(event) => {
                  //   void handleSubmit(onSubmit)(event);
                  // }}
                >
                  <Flex flexDirection="column" gap="5">
                    <CurrencyField
                      name={"amount"}
                      label="Amount"
                      control={control}
                    />
                    <Button width="100%" colorScheme="purple" variant="outline">
                      Convert
                    </Button>
                  </Flex>
                </form>

                <ConversionResult />
              </CardBody>
            </Card>
            <Spacer />

            <Card mb={10}>
              <CardBody>
                {isLoading ? (
                  <ConversionStatsSkeleton />
                ) : (
                  <ConversionStats {...stats} />
                )}
              </CardBody>
            </Card>
          </Flex>
          <Footer />
        </Container>
      </main>
    </GradientBg>
  );
}
