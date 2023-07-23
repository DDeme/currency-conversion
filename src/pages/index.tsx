"use client";
import { Card, CardBody, Container, Flex, Spacer } from "@chakra-ui/react";
import { GradientBg } from "@/components/gradient-bg";
import {
  ConversionStats,
  ConversionStatsSkeleton,
} from "@/components/conversion-stats";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header/Header";
import { ConversionForm } from "@/components/conversion-form";
import { ConversionResult } from "@/components/conversion-result";
import { useState } from "react";
import { currencies } from "@/components/currency-select";

async function getStats() {
  const res = await fetch("/api/stats");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getConversion(queryParams: {
  from: string;
  to: string;
  amount: number;
}) {
  const params = new URLSearchParams({
    ...queryParams,
    amount: `${queryParams.amount}`,
  }).toString();

  const res = await fetch(`/api/convert?${params}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  const queryClient = useQueryClient();

  const { isLoading: isLoadingStats, data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    failureCount,
    failureReason,
    mutate,
    mutateAsync,
    reset,
    status,
  } = useMutation({
    mutationFn: getConversion,
    mutationKey: ["conversion"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
  });

  const [conversionData, setConversionData] = useState({});

  return (
    <GradientBg>
      <main>
        <Container maxW="container.sm">
          <Flex
            pt={10}
            pb={10}
            minHeight={"100vh"}
            direction={"column"}
            gap={10}
          >
            <Header />
            <Card>
              <CardBody>
                <ConversionForm
                  onSubmit={(values) => {
                    mutateAsync(values);
                    setConversionData({
                      fromCurrencyName: currencies[values.from].name,
                      toSymbol: currencies[values.to].symbol,
                      amount: values.amount,
                      fromCode: values.from,
                      toCode: values.to,
                    });
                  }}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                />
                {isSuccess && data && (
                  <ConversionResult {...conversionData} {...data} />
                )}
              </CardBody>
            </Card>
            <Spacer />
            <Card>
              {/* // TODO: make independent HOC for loading data , error boundary*/}
              <CardBody>
                {isLoadingStats ? (
                  <ConversionStatsSkeleton />
                ) : (
                  <ConversionStats {...stats} />
                )}
              </CardBody>
            </Card>
            <Footer />
          </Flex>
        </Container>
      </main>
    </GradientBg>
  );
}
