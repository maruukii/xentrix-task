import { z } from "zod";

export const signupSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  officeAddress: z.string().min(1, "Office address is required"),
  postCode: z.string().min(1, "Post code is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
