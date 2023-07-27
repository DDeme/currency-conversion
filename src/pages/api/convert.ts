import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";
import * as cheerio from "cheerio";
import { multiply, round } from "mathjs";

const prisma = new PrismaClient();

const parseHtmlResponse = (html: string, from: string, to: string): number => {
  const $ = cheerio.load(html);
  return parseFloat(
    $(
      `[data-source=${from}][data-target=${to}] > div > div > div:first-child`
    ).text()
  );
};

export const fetchQuotePair = async (from: string, to: string) => {
  const response = await fetch(`${process.env.CURRENCY_API_URL}${from}-${to}`);
  const html = await response.text();
  const quote = parseHtmlResponse(html, from, to);
  return quote;
};

export const convertCurrency = async (
  from: string,
  to: string,
  amount: number
) => {
  const quote = await fetchQuotePair(from, to);
  const result = round(multiply(amount, quote), 2);
  return {
    quote,
    result,
  };
};

const getAmoutInUSD = async (
  from: string,
  to: string,
  amount: number,
  result: number
) => {
  if (from === "USD") {
    return amount;
  } else if (to === "USD") {
    return result;
  } else {
    const { result: convertedResult } = await convertCurrency(
      from,
      "USD",
      amount
    );
    return convertedResult;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const from = req.query?.from;
  const to = req.query?.to;
  const amount = req.query?.amount;

  const queryArgs: [string, string, number] = [
    from as string,
    to as string,
    amount as unknown as number,
  ];

  queryArgs.forEach((param) => {
    if (!param || param === null) {
      throw new Error("Invalid arguments");
    }
  });

  const { quote, result } = await convertCurrency(...queryArgs);
  const amountInUSD = await getAmoutInUSD(...queryArgs, result);

  await prisma.history.create({
    data: {
      amountInUSD,
      to: queryArgs[1],
    },
  });
  return res.status(200).json({ quote, result });
}
