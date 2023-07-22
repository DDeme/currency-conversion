import { NextRequest, NextResponse } from "next/server";
import currenciesDetails from "./currencies.json";
import { log } from "console";

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

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method !== "GET") {
    throw new Error("Method not allowed");
  }
  const response = await fetch(
    `http://api.currencylayer.com/list?access_key=${process.env.CURRENCY_API_KEY}`,
    {
      method: "GET",
      redirect: "follow",
    }
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
