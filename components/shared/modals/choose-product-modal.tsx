'use client';

import { Dialog } from '@/components/ui';
import { DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useCartStore } from '@/store';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.ProductItems[0].pizzaType);
  const addCartitem = useCartStore((state) => state.addCartItem);
  const firstitem = product.ProductItems[0];

  const onAddProduct = () => {
    addCartitem({
      productItemId: firstitem.id,
    });
  };

  const onAddPizza = (productItemId: number, ingredients: number[]) => {
    addCartitem({
      productItemId,
      ingredients,
    });
  };
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.ProductItems}
            onSubmit={onAddPizza}
          />
        ) : (
          <ChooseProductForm
            price={firstitem.price}
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onAddProduct}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
