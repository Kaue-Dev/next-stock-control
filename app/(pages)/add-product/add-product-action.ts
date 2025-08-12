"use server";

import { addProductFormSchema } from "@/app/(pages)/add-product/add-product-form-schema";
import db from "@/lib/db";
import z from "zod";

type ProductData = z.infer<typeof addProductFormSchema>;

export default async function addProductAction(data: ProductData) {
  try {
    const product = await db.product.create({
      data: {
        name: data.name,
        sku: data.sku,
        stockQuantity: data.stockQuantity,
        minStock: data.minStock,
        maxStock: data.maxStock,
        price: data.price,
        description: data.description || "",
        category: data.category,
      }
    })

    return { 
      success: true, 
      product 
    };

  } catch (error) {
    console.error("Error adding product:", error);
    return { 
      success: false, 
      message: "Failed to add product" 
    };
  }
}