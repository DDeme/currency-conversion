"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import {
  Card,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Container,
  Box,
  Button,
  Select,
} from "@chakra-ui/react";
import { CurrencyInput } from "@/components/currency-input/CurrencyInput";
import { ConversionResult } from "@/components/conversion-result/ConversionResult";

export default function Home() {
  return (
    <main>
      <Container>
        <Box p={4}>
          <Heading>Conversion app</Heading>
          <Text>Best source for currency conversion and exchange rates</Text>
          <Card mt={6}>
            <CardBody>
              <Text>Amount</Text>
              <CurrencyInput />
              <Text>From:</Text>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text>To:</Text>
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text>Conversion rate</Text>
              <ConversionResult />
              <Button colorScheme="blue">Convert</Button>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
