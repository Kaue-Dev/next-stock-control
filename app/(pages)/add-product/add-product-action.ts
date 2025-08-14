"use server";

import { addProductFormSchema } from "@/app/(pages)/add-product/add-product-form-schema";
import db from "@/lib/db";
import z from "zod";

type ProductData = z.infer<typeof addProductFormSchema>;

export default async function addProductAction(data: ProductData) {

  const productSkuAlreadyExists = await db.product.findUnique({
    where: {
      sku: data.sku,
    },
  });

  if (productSkuAlreadyExists) {
    return {
      success: false,
      message: "Product with this SKU already exists."
    }
  }

  try {
    await db.product.create({
      data: {
        name: data.name,
        sku: data.sku,
        stockQuantity: data.stockQuantity,
        minStock: data.minStock,
        maxStock: data.maxStock,
        price: data.price,
        category: data.category,
      }
    });

    return {
      success: true,
      message: "Product added successfully!"
    };

  } catch (error) {
    return {
      success: false,
      message: "Failed to add product"
    };
  }
}