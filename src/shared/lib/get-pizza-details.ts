import { calcTotalPizzaPrice } from "@/shared/lib/calc-total-pizza-price";
import { mapPizzaType, PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const getPizzaDetails = (
  size: PizzaSize,
  type: PizzaType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(
    items,
    size,
    type,
    ingredients,
    selectedIngredients,
  );
  const textDetails = `${size} cm, ${mapPizzaType[type]} pizza`;

  return { totalPrice, textDetails };
};
