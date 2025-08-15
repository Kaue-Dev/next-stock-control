import { PackageOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductsTable } from "./products-table";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen mx-8">
      <div className="flex items-center gap-2 mb-4 w-full max-w-5xl pl-1">
        <PackageOpen size={20} />
        <h1 className="text-xl font-bold text-start">Manage products from your stock.</h1>
      </div>
      <div className="w-full max-w-5xl space-y-4">
        <Input type="search" placeholder="Search any product..." className="max-w-lg" />
        <ProductsTable />
      </div>
    </div>
  )
}