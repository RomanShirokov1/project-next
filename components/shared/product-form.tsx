'use client';
import { ProductWithRelations } from '@/@types/prisma';
import { useCartStore } from '@/store';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';
import { useRouter } from 'next/router';

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);
  const firstitem = product.ProductItems[0];
  const isPizzaForm = Boolean(product.ProductItems[0].pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstitem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success('Товар ' + product.name + ' добавлен в корзину');
      _onSubmit?.();
    } catch (error) {
      console.error(error);
      toast.error('Не удалось добавить товар в корзину');
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.ProductItems}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  } else {
    return (
      <ChooseProductForm
        price={firstitem.price}
        imageUrl={product.imageUrl}
        name={product.name}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }
};
