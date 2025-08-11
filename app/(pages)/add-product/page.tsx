import { PackagePlus } from "lucide-react";
import { AddProductForm } from "./add-product-form";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2 mb-4 w-full max-w-xl pl-1">
        <PackagePlus size={20} />
        <h1 className="text-xl font-bold text-start">Add a new product to your stock system.</h1>
      </div>
      <AddProductForm />
    </div>
  );
}