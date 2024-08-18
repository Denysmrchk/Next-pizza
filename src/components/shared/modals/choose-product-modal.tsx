"use client";
import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChooseProductForm } from "@/components/shared";
import { useRouter } from "next/navigation";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "@/components/shared/choose-pizza-form";
import { useCartStore } from "@/shared/store";
import { toast } from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + "added successfully.");
      router.back();
    } catch (err) {
      toast.error(product.name + "can`t add  to cart");
      console.log(err);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            price={firstItem.price}
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
