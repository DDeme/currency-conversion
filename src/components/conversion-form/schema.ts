import { z } from "zod";

// FIX: currencies cant be equal

export const schema = z
  .object({
    amount: z.number(),
    from: z.string(),
    to: z.string(),
  })
  .refine((schema) => schema.from !== schema.to, {
    message: "Currencies can`t be equal.",
  });
