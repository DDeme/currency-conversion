import { NextRequest, NextResponse } from "next/server";

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
  const { currencies } = await response.json();

  return res.status(200).json({ currencies });
}
