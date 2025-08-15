import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import getProductsAction from "./get-products-action";
import { Badge } from "@/components/ui/badge";
import { ProductActions } from "./product-actions";

export async function ProductsTable() {
  const products = await getProductsAction(); 

  return (
    <Table>
      <TableHeader className="bg-zinc-100">
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.length === 0 && (
          <TableRow>
            <TableCell>
              No products found.
            </TableCell>
          </TableRow>
        )}
        {products?.map(product => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.sku}</TableCell>
            <TableCell>{product.stockQuantity}</TableCell>
            <TableCell>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(product.price)}
            </TableCell>
            <TableCell>
              {product.stockQuantity === 0 ? (
                <Badge variant="destructive">Out of Stock</Badge>
              ) : product.stockQuantity < product.minStock ? (
                <Badge variant="info">Low Stock</Badge>
              ) : product.stockQuantity > product.maxStock ? (
                <Badge variant="warning">High Stock</Badge>
              ) : (
                <Badge variant="success">Available</Badge>
              )}
            </TableCell>
            <TableCell>
              <ProductActions productId={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}