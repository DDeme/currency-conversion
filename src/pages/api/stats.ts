import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next/types";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    throw new Error("Method not allowed");
  }
  const totalConversions = await prisma.history.count();
  const {
    _sum: { amountInUSD: totalAmountInUSD },
  } = await prisma.history.aggregate({
    _sum: {
      amountInUSD: true,
    },
  });

  const groupByCurrency = await prisma.history.groupBy({
    by: ["to"],
    _count: {
      to: true,
    },
    orderBy: {
      _count: {
        to: "desc",
      },
    },
    take: 1,
  });

  const [{ to: mostPopularDestinationCurrency }] = groupByCurrency.length
    ? groupByCurrency
    : [{ to: "" }];

  return res.status(200).json({
    totalConversions,
    totalAmountInUSD: totalAmountInUSD
      ? parseFloat(totalAmountInUSD as unknown as string)
      : 0,
    mostPopularDestinationCurrency,
  });
}
