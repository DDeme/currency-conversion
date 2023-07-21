import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const convertCurrency = async (from: string, to: string, amount: string) => {
  const response = await fetch(
    `http://api.currencylayer.com/convert?from=${from}&to=${to}&amount=${amount}&access_key=${process.env.CURRENCY_API_KEY}`,
    {
      method: "GET",
      redirect: "follow",
    }
  );

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
  amount: string,
  result: number
) => {
  if (from === "USD") {
    return parseFloat(amount);
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

export default async function handler(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const from = searchParams.get("from") as string;
  const to = searchParams.get("to") as string;
  const amount = searchParams.get("amount") as string;

  [from, to, amount].forEach((param) => {
    if (param === null) {
      throw new Error("Invalid arguments");
    }
  });

  const {
    info: { quote },
    result,
  } = await convertCurrency(from, to, amount);
  const amountInUSD = await getAmoutInUSD(from, to, amount, result);

  await prisma.history.create({
    data: {
      amountInUSD,
      to,
    },
  });
  return res.status(200).json({ quote, result });
}
