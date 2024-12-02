import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .trim() // Trims whitespace from the input
      .min(1, { message: "Name is required" }) // Ensures non-empty string
      .max(50, { message: "Name must be at most 50 characters long" }),
    email: z
      .string({ required_error: "Email is required" })
      .trim() // Trims whitespace from the input
      .min(1, { message: "Email is required" }) // Ensures non-empty string
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .trim() // Trims whitespace from the input
      .min(1, { message: "Password is required" }) // Ensures non-empty string
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .required();

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;

export const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim() // Trims whitespace from the input
    .min(1, { message: "Email is required" }) // Ensures non-empty string
    .email({ message: "Invalid email address" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim() // Trims whitespace from the input
    .min(1, { message: "Password is required" }) // Ensures non-empty string
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
