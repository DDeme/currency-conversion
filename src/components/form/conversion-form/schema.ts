import { z } from "zod";

export const schema = z
  .object({
    amount: z.number().gte(0).int().nullable(),
    from: z.string(),
    to: z.string(),
  })
  .refine((schema) => schema.from !== schema.to, {
    message: "Currencies can`t be equal.",
    path: ["to"],
  });
