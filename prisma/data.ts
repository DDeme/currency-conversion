import { Prisma } from "@prisma/client";

export const history = [
  {
    to: "USD",
    amountInUSD: new Prisma.Decimal(1500.95),
  },
  {
    to: "EUR",
    amountInUSD: new Prisma.Decimal(2000.15),
  },
  {
    to: "USD",
    amountInUSD: new Prisma.Decimal(100000),
  },
];
