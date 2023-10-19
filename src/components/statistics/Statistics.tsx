import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ConversionStats } from "../conversion-stats";
import { Skeleton } from "@chakra-ui/react";

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

const USDIntl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Statistics = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  const results = isLoading
    ? [
        {
          title: "Most popular currency",
          value: data?.mostPopularDestinationCurrency,
        },
        {
          title: "Total amount converted",
          value: USDIntl.format(data?.totalAmountInUSD),
        },
        {
          title: "Total amount converted",
          value: data?.totalConversions,
        },
      ]
    : [
        {
          title: "Most popular currency",
          value: <Skeleton height="1.5rem" mt={2} mb={2} width="50px" />,
        },
        {
          title: "Total amount converted",
          value: <Skeleton height="1.5rem" mt={2} mb={2} width="80px" />,
        },
        {
          title: "Total amount converted",
          value: <Skeleton height="1.5rem" mt={2} mb={2} width="120px" />,
        },
      ];

  <ConversionStats conversionStats={results} />;
};
