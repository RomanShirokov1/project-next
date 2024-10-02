import { Variant } from "@/components/shared/group-variants";
import { PizzaSize, PizzaType } from "@/constants/pizza";
import { getAvailablePizzaTypes } from "@/lib";
import { ProductItem } from "@prisma/client";
import React from "react";
import useSet from "react-use/lib/useSet";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  currentItemId?: number;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
  availableTypes: Variant[];
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const availableTypes = getAvailablePizzaTypes(items, size);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  React.useEffect(() => {
    const isTypeAvailable = availableTypes.find(
      (item) => Number(item.value) === type && !item.disabled,
    );
    const availableType = availableTypes?.find((item) => !item.disabled);

    if (!isTypeAvailable && availableType) {
      setType(Number(availableType.value) as PizzaType);
    }
  }, [size]);
  return {
    size,
    type, 
    currentItemId,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availableTypes
  }
}