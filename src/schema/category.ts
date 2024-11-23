import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(4),
  description: z.string().optional(),
});

export type CategorySchemaType = z.infer<typeof CategorySchema>;
