import { z } from "zod";

export const ProductSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim() // Trims whitespace from the input
    .min(1, { message: "Name is required" }) // Ensures non-empty string
    .max(150, { message: "Name must be at most 150 characters long" }),
  categoryId: z.number(),
  brand: z.string().optional(),
  supplier: z.string().optional(),
  model: z.string().optional(),
  serialNumber: z.string().optional(),
  barcode: z.string().optional(),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .nonnegative(), // Ensures non-negative number
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
