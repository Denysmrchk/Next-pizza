import React from "react";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { useSet } from "react-use";
import { getAvailablePizzaSizes } from "@/shared/lib";
import { ProductItem } from "@prisma/client";
import { Variant } from "@/components/shared/group-variants";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  selectedIngredients: Set<number>;
  availablePizzaSizes: Variant[];
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set(new Set<number>([])),
  );
  const availablePizzaSizes = getAvailablePizzaSizes(type, items);
  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size,
  )?.id;
  React.useEffect(() => {
    const isAvailableSize = availablePizzaSizes?.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const availableSize = availablePizzaSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);
  return {
    type,
    size,
    currentItemId,
    selectedIngredients,
    availablePizzaSizes,
    setSize,
    setType,
    addIngredient,
  };
};
