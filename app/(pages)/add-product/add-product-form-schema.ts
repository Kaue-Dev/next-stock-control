import { z } from 'zod';

export const addProductFormSchema = z.object({
  name: z.string().min(1, "This field is required"),
  sku: z.string().min(1, "This field is required"),
  category: z.string().min(1, "This field is required"),

  price: z.coerce.number()
  .nonnegative("Price cannot be negative")
  .min(0.01, "This field is required"),

  stockQuantity: z.coerce.number()
  .int("Stock quantity must be an integer")
  .nonnegative("Stock quantity cannot be negative")
  .min(0, "This field is required"),

  minStock: z.coerce.number()
  .int("Minimum stock must be an integer")
  .nonnegative("Minimum stock cannot be negative")
  .min(1, "This field is required"),

  maxStock: z.coerce.number()
  .int("Maximum stock must be an integer")
  .nonnegative("Maximum stock cannot be negative")
  .min(1, "This field is required"),
})

export type addProductFormSchemaType = z.infer<typeof addProductFormSchema>;