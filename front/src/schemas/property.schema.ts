import { z } from "zod";

export const propertySchema = z.object({
  _id: z.string().trim().optional(),
  image: z.string().trim().optional(),
  propertyName: z.string().trim().min(1, "Property name is required"),
  address: z.string().trim().min(1, "Property address is required"),
  city: z.string().trim().min(1, "City is required"),
  country: z.string().trim().min(1, "Country is required"),
  postCode: z.string().trim().min(1, "Post code is required"),
  reference: z.string().trim().min(1, "Property reference is required"),

value: z.coerce.number().min(1, "Property value is required and must be positive"),
  type: z.enum(["house", "apartment", "condo", "commercial", "land",""])
  .refine((v) => v !== "", {
    message: "Property type is required",
  }),

access: z.enum(["private", "shared", "public road",""])
  .refine((v) => v !== "", {
    message: "Property access is required",
  }),



  dimension: z.coerce.number().min(1, "Property dimension is required and must be positive").max(1000000, "Dimension seems too large"),
  bedrooms: z.coerce.number().min(0, "Number of bedrooms is required and must be positive").max(100, "Number of bedrooms seems too large"),
  bathrooms: z.coerce.number().min(0, "Number of bathrooms is required and must be positive").max(100, "Number of bathrooms seems too large"),
  floors: z.coerce.number().min(0, "Number of floors is required and must be positive").max(100, "Number of floors seems too large"),

  features: z
    .object({
      garden: z.boolean().default(false),
      garage: z.boolean().default(false),
      parking: z.boolean().default(false),
    })
    .optional()
    .default({
      garden: false,
      garage: false,
      parking: false,
    }),

  status: z.enum(["sale", "let"]).optional(),
});
export type PropertyFormData = z.infer<typeof propertySchema>;
