import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ConversionStats, ConversionStatsSkeleton } from "../conversion-stats";

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

export const Statistics = () => {
  const { isLoading, data: stats } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
  });

  return isLoading ? (
    <ConversionStatsSkeleton />
  ) : (
    <ConversionStats {...stats} />
  );
};
