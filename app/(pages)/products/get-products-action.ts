"use server";

import db from "@/lib/db";

export default async function getProductsAction() {
  try {
    const products = await db.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
