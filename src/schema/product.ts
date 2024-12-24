import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(4),
  categoryId: z.number(),
  brand: z.string().optional(),
  supplier: z.string().optional(),
  model: z.string().optional(),
  serialNumber: z.string().optional(),
  barcode: z.string().optional(),
  price: z.string().optional(),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
