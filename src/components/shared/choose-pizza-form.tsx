import { Title } from "@/components/shared/title";
import { PizzaImage } from "@/components/shared/pizza-image";
import { cn } from "@/shared/lib/utils";
import { GroupVariants } from "@/components/shared/group-variants";
import { PizzaSize, PizzaType, pizzaTypes } from "@/shared/constants/pizza";
import React from "react";
import { Ingredient as IngredientType, ProductItem } from "@prisma/client";
import { IngredientItem } from "@/components/shared/ingredient";
import { Button } from "@/components/ui";
import { usePizzaOptions } from "@/shared/hooks";
import { getPizzaDetails } from "@/shared/lib";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: IngredientType[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading?: boolean;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAddCart,
  onSubmit,
  loading,
  className,
}) => {
  const {
    size,
    type,
    selectedIngredients,
    availablePizzaSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  } = usePizzaOptions(items);
  const { totalPrice, textDetails } = getPizzaDetails(
    size,
    type,
    items,
    ingredients,
    selectedIngredients,
  );
  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
    onClickAddCart?.();
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7 h-full">
        <Title text={name} size={"md"} className="font-extrabold mb-1" />
        <p className="text-gray-400 mb-2">{textDetails}</p>
        <div className=" flex flex-col gap-6">
          <GroupVariants
            items={availablePizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />
          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients &&
              ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)}
                />
              ))}
          </div>
        </div>
        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full"
        >
          Add to cart {totalPrice} $
        </Button>
      </div>
    </div>
  );
};
