import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const convertCurrency = async (from: string, to: string, amount: number) => {
  // const response = await fetch(
  //   `http://api.currencylayer.com/convert?from=${from}&to=${to}&amount=${amount}&access_key=${process.env.CURRENCY_API_KEY}`,
  //   {
  //     method: "GET",
  //     redirect: "follow",
  //   }
  // );

  // return await response.json();
  // TODO: mock for now paid api
  return {
    success: true,
    terms: "https://currencylayer.com/terms",
    privacy: "https://currencylayer.com/privacy",
    query: {
      from,
      to,
      amount: 10,
    },
    info: {
      timestamp: 1430068515,
      quote: 0.658443,
    },
    result: 6.58443,
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
  console.log(queryArgs);

  queryArgs.forEach((param) => {
    if (!param || param === null) {
      throw new Error("Invalid arguments");
    }
  });

  const {
    info: { quote },
    result,
  } = await convertCurrency(...queryArgs);
  const amountInUSD = await getAmoutInUSD(...queryArgs, result);

  await prisma.history.create({
    data: {
      amountInUSD,
      to: queryArgs[1],
    },
  });
  return res.status(200).json({ quote, result });
}
