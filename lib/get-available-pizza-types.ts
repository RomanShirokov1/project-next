import { Variant } from '@/components/shared/group-variants';
import { PizzaSize, pizzaTypes } from './../constants/pizza';
import { ProductItem } from "@prisma/client";


export const getAvailablePizzaTypes = (items: ProductItem[], size: PizzaSize): Variant[] => {
  const filteredPizzasBySize = items.filter((item) => item.size === size);
  return pizzaTypes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasBySize.some((pizza) => Number(pizza.pizzaType) === Number(item.value)),
  }));
 }