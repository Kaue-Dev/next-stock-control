"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Edit, Ellipsis, Eye, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import deleteProductAction from "./delete-product-action";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface ProductActionsProps {
  productId: string;
}

export function ProductActions({ productId }: ProductActionsProps) {
  const pathname = usePathname();

  function handleViewProductInfo() {
    // Logic to view product information
  }

  function handleEditProduct() {
    // Logic to edit product
  }

  async function handleDeleteProduct() {
    const result = await deleteProductAction(productId, pathname);

    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        duration: 3000,
      })
    }

    if (result.success === false) {
      toast.error(result.message, {
        position: "top-right",
        duration: 3000,
      })
    }
  }

  return (
    <Popover>
      <PopoverTrigger className="flex items-center cursor-pointer">
        <Ellipsis size={16} />
      </PopoverTrigger>
      <PopoverContent className="w-fit" align="end">
        <div className="flex flex-col gap-2.5">
          <Button className="cursor-pointer bg-blue-600/90 hover:bg-blue-600" size="sm">
            View <Eye />
          </Button>
          <Button className="cursor-pointer bg-yellow-600/90 hover:bg-yellow-600" size="sm">
            Edit <Edit />
          </Button>
          <Button className="cursor-pointer bg-red-600/90 hover:bg-red-600" size="sm" onClick={handleDeleteProduct}>
            Delete <Trash />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}