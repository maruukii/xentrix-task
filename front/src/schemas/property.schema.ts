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

  value: z.number().min(1, "Property value is required"),
  type: z.enum(["House", "Apartment", "Condo", "Commercial", "Land"]),

  access: z.enum(["Private", "Shared", "Public Road"]),

  dimension: z.number().min(1, "Property dimension is required"),
  bedrooms: z.number().min(1, "Number of bedrooms is required"),
  bathrooms: z.number().min(1, "Number of bathrooms is required"),
  floors: z.number().min(1, "Number of floors is required"),

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

  status: z.enum(["Sale", "Let"]).optional(),
});
export type PropertyFormData = z.infer<typeof propertySchema>;
