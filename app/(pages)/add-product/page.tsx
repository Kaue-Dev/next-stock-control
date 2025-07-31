import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { PackagePlus } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2 mb-4 w-full max-w-xl pl-1">
        <PackagePlus size={20} />
        <h1 className="text-xl font-bold text-start">Add a new product to your stock system.</h1>
      </div>
      <Card className="w-full max-w-xl">
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" type="text" placeholder="Enter product name" />
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="sku">SKU</Label>
              <Input id="sku" type="text" placeholder="Enter SKU" />
            </div>
            <div className="space-y-2 w-full">
              <Label>Category</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="uncategorized">Uncategorized</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="price">Product Price</Label>
              <Input id="price" type="number" placeholder="Enter product price" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input id="stockQuantity" type="number" placeholder="Enter stock quantity" />
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="minStock">Stock Minimum</Label>
              <Input id="minStock" type="number" placeholder="Enter minimum stock" />
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="maxStock">Stock Maximum</Label>
              <Input id="maxStock" type="number" placeholder="Enter maximum stock" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter product description" />
          </div>
          <Button type="submit" className="w-full cursor-pointer">Add Product</Button>
        </CardContent>
      </Card>
    </div>
  );
}