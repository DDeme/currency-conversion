import React from "react";

const currencies = [
  { label: "EUR", value: "eur" },
  { label: "USD", value: "usd" },
];
import { Select } from "chakra-react-select";

export const CurrencySelect = () => {
  return <Select placeholder="Select currency" options={currencies}></Select>;
};
