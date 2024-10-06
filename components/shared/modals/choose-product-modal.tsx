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
import toast from 'react-hot-toast';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();
  const firstitem = product.ProductItems[0];
  const isPizzaForm = Boolean(product.ProductItems[0].pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstitem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success('Товар ' + product.name + ' добавлен в корзину');
      router.back();
    } catch (error) {
      console.error(error);
      toast.error('Не удалось добавить товар в корзину');
    }
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
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            price={firstitem.price}
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
