import { z } from "zod";

export const signupSchema = z.object({
  businessName: z
    .string()
    .trim()
    .min(1, "Business name is required")
    .max(40, "Business name must be at most 40 characters"),
  officeAddress: z.string().trim().min(1, "Office address is required"),
  postCode: z.string().trim().min(1, "Post code is required"),
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});
