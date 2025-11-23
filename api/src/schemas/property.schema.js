import { z } from "zod";

export const propertySchema = z.object({
  image: z.string().trim().optional(),
  _id: z.string().trim().optional(),
  propertyName: z.string().trim().min(1, "Property name is required"),
  address: z.string().trim().min(1, "Property address is required"),
  city: z.string().trim().min(1, "City is required"),
  country: z.string().trim().min(1, "Country is required"),
  postCode: z.string().trim().min(1, "Post code is required"),
  reference: z.string().trim().min(1, "Property reference is required"),

  value: z.coerce
    .number()
    .min(1, "Property value is required and must be positive"),
  type: z.enum(["house", "apartment", "condo", "commercial", "land"], {
    required_error: "Property type is required",
  }),

  access: z.enum(["private", "shared", "public road"], {
    required_error: "Property access information is required",
  }),

  dimension: z.coerce
    .number()
    .min(1, "Property dimension is required and must be positive")
    .max(1000000, "Property dimension seems too large"),
  bedrooms: z.coerce
    .number()
    .min(0, "Number of bedrooms is required and must be positive")
    .max(100, "Number of bedrooms seems too high"),
  bathrooms: z.coerce
    .number()
    .min(0, "Number of bathrooms is required and must be positive")
    .max(100, "Number of bathrooms seems too high"),
  floors: z.coerce
    .number()
    .min(0, "Number of floors is required and must be positive")
    .max(100, "Number of floors seems too high"),

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
