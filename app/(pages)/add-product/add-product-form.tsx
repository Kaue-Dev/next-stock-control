"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectTrigger, SelectValue, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Controller, useForm } from "react-hook-form";
import { addProductFormSchema } from "@/app/(pages)/add-product/add-product-form-schema";
import addProductAction from "./add-product-action";
import { toast } from "sonner";
import { useState } from "react";

export function AddProductForm() {
  const [_showSuccessToast, setShowSuccessToast] = useState<boolean>(false);

  function handleShowSuccessToast() {
    setShowSuccessToast(true);
    toast.success("Product added successfully!", {
      description: "Your product has been added to the stock.",
      duration: 3000,
      position: "top-right",
    })
  }

  type SchemaInput = z.input<typeof addProductFormSchema>;

  const form = useForm<SchemaInput>({
    resolver: zodResolver(addProductFormSchema)
  })

  async function onSubmit(data: SchemaInput) {
    const parsedData = addProductFormSchema.safeParse(data);
    
    if (parsedData.success) {
      await addProductAction(parsedData.data)
      handleShowSuccessToast();
      form.reset();
    }
  } 

  return (
    <Card className="w-full max-w-xl">
      <Button onClick={handleShowSuccessToast}>clique</Button>
      <CardContent>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>  
            <Input id="name" type="text" placeholder="Enter product name" {...form.register("name")} />
            {form.formState.errors.name && (
              <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
            )}
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="sku">SKU</Label>
              <Input id="sku" type="text" placeholder="Enter SKU" {...form.register("sku")} />
              {form.formState.errors.sku && (
                <p className="text-red-500 text-sm">{form.formState.errors.sku.message}</p>
              )}
            </div>
            <div className="space-y-2 w-full">
              <Label>Category</Label>
              <Controller name="category" defaultValue="Uncategorized" control={form.control} render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Electronics">Electronics</SelectItem>
                      <SelectItem value="Furniture">Furniture</SelectItem>
                      <SelectItem value="Clothing">Clothing</SelectItem>
                      <SelectItem value="Food">Food</SelectItem>
                      <SelectItem value="Uncategorized">Uncategorized</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.category && (
                <p className="text-red-500 text-sm">{form.formState.errors.category.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="price">Product Price</Label>
              <Input id="price" type="number" placeholder="Enter product price" {...form.register("price")} />
              {form.formState.errors.price && (
                <p className="text-red-500 text-sm">{form.formState.errors.price.message}</p>
              )}
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="stockQuantity">Stock Quantity</Label>
              <Input id="stockQuantity" type="number" placeholder="Enter stock quantity" {...form.register("stockQuantity")} />
              {form.formState.errors.stockQuantity && (
                <p className="text-red-500 text-sm">{form.formState.errors.stockQuantity.message}</p>
              )}
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-2 w-full">
              <Label htmlFor="minStock">Stock Minimum</Label>
              <Input id="minStock" type="number" placeholder="Enter minimum stock" {...form.register("minStock")} />
              {form.formState.errors.minStock && (
                <p className="text-red-500 text-sm">{form.formState.errors.minStock.message}</p>
              )}
            </div>
            <div className="space-y-2 w-full">
              <Label htmlFor="maxStock">Stock Maximum</Label>
              <Input id="maxStock" type="number" placeholder="Enter maximum stock" {...form.register("maxStock")} />
              {form.formState.errors.maxStock && (
                <p className="text-red-500 text-sm">{form.formState.errors.maxStock.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter product description" {...form.register("description")} />
            {form.formState.errors.description && (
              <p className="text-red-500 text-sm">{form.formState.errors.description.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full cursor-pointer">Add Product</Button>
        </form>
      </CardContent>
    </Card>
  )
}