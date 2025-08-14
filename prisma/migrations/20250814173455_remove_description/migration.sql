/*
  Warnings:

  - You are about to drop the column `description` on the `Product` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "stockQuantity" INTEGER NOT NULL,
    "minStock" INTEGER NOT NULL,
    "maxStock" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Uncategorized',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("category", "createdAt", "id", "maxStock", "minStock", "name", "price", "sku", "stockQuantity", "updatedAt") SELECT "category", "createdAt", "id", "maxStock", "minStock", "name", "price", "sku", "stockQuantity", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_sku_key" ON "Product"("sku");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
