import React, { ComponentProps, useState } from "react";
import { ConversionForm } from "../form";
import { ErrorBoundary } from "../error-boudary";
import { ConversionResult } from "../conversion-result";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { currencies } from "../form/inputs/currency-select";
import { ErrorMessage } from "../error-message";

async function getConversion(queryParams: {
  from: string;
  to: string;
  amount: number | null;
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

export const Conversion = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isSuccess, mutateAsync } = useMutation({
    mutationFn: getConversion,
    mutationKey: ["conversion"],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats"] });
    },
  });

  const [conversionData, setConversionData] = useState<
    ComponentProps<typeof ConversionResult>["data"]
  >({
    amount: 1000,
    result: null,
    quote: null,
    fromCurrencyName: "US Dollar",
    toSymbol: "€",
    fromSymbol: "$",
    fromCode: "USD",
    toCode: "EUR",
  });
  return (
    <>
      <ConversionForm
        onSubmit={(values) => {
          mutateAsync(values);
          setConversionData({
            ...conversionData,
            fromCurrencyName: currencies[values.from].name,
            toSymbol: currencies[values.to].symbol,
            amount: values.amount,
            fromCode: values.from,
            toCode: values.to,
          });
        }}
        onChange={(values) => {
          setConversionData({
            ...conversionData,
            fromCurrencyName: currencies[values.from].name,
            toSymbol: currencies[values.to].symbol,
            amount: values.amount,
            fromCode: values.from,
            toCode: values.to,
          });
        }}
        defaultValues={{
          amount: conversionData.amount,
          from: conversionData.fromCode,
          to: conversionData.toCode,
        }}
        isDisabled={isLoading}
        isLoading={isLoading}
      />
      {isLoading && <ConversionResult data={{ ...conversionData }} isLoading />}
      {isSuccess && data && (
        <ConversionResult
          data={{ ...conversionData, ...data }}
          isLoading={false}
        />
      )}
    </>
  );
};
