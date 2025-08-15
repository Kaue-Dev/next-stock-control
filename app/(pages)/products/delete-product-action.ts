"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function deleteProductAction(productId: string, currentPath?: string) {
  try {
    await db.product.delete({
      where: { id: productId }
    });

    revalidatePath(currentPath || "/products");
    
    return { 
      success: true, 
      message: "Product deleted successfully." 
    };
  } catch (error) {
    return { 
      success: false, 
      message: "Failed to delete product." 
    };
  }
}