'use client';
import { CheckoutItem, CheckoutSidebar, Container, Title, WhiteBlock } from '@/components/shared';
import { Input, Textarea } from '@/components/ui';
import { PizzaSize, PizzaType } from '@/constants/pizza';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';

export default function CheckoutPage() {
  const { totalAmount, items, updateItemQuantity, removeCartItem } = useCart();
  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  quantity={item.quantity}
                  disabled={item.disabled}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize,
                  )}
                  onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input placeholder="Имя" name="firstName" className="text-base" />
              <Input placeholder="Фамилия" name="lastName" className="text-base" />
              <Input placeholder="Почта" name="email" className="text-base" />
              <Input placeholder="Телефон" name="phone" className="text-base" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input placeholder="Адрес" name="adress" className="text-base" />
              <Textarea
                placeholder="Комментарии к заказу"
                name="comment"
                className="text-base"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} loading={false} />
        </div>
      </div>
    </Container>
  );
}
