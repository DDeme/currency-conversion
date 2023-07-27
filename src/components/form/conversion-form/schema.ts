import { z } from "zod";

export const schema = z
  .object({
    amount: z.number().gt(0),
    from: z.string(),
    to: z.string(),
  })
  .refine((schema) => schema.from !== schema.to, {
    message: "Currencies can`t be equal.",
    path: ["to"],
  });