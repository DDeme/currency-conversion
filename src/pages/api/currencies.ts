import { currenciesDetails } from "@/const";
import { NextApiRequest, NextApiResponse } from "next/types";

interface CurrencyDetail {
  name: string;
  symbol: string;
  symbolNative: string;
  decimalDigits: number;
  rounding: number;
  code: string;
  namePlural: string;
}
interface CurrencyApiResponse {
  [key: string]: CurrencyDetail;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    throw new Error("Method not allowed");
  }
  const response = await fetch(
    `http://api.currencylayer.com/list?access_key=${process.env.CURRENCY_API_KEY}`
  );

  const { currencies: supportedCurrencies } = await response.json();
  let currencies: CurrencyApiResponse = {};
  for (const key in supportedCurrencies) {
    const currencyDetail = currenciesDetails.find(({ code }) => code === key);
    if (currencyDetail) {
      currencies[key] = currencyDetail;
    }
  }

  return res.status(200).json({ currencies });
}
