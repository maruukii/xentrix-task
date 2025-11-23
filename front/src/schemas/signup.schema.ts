import { z } from "zod";

export const signupSchema = z.object({
businessName: z
  .string()
  .min(1, "Business name is required")
  .max(40, "Business name must be at most 40 characters"),
  officeAddress: z.string().min(1, "Office address is required"),
  postCode: z.string().min(1, "Post code is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
export type SignupFormData = z.infer<typeof signupSchema>;

