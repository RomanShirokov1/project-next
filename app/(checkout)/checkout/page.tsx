import { CheckoutItemDetails, Container, Title, WhiteBlock } from '@/components/shared';
import { Button, Input, Textarea } from '@/components/ui';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">123123</WhiteBlock>

          <WhiteBlock title="2. Персональная информация">
            <div className="grid grid-cols-2 gap-5">
              <Input placeholder="Имя" name="firstName" className="text-base" />
              <Input placeholder="Фамилия" name="lastName" className="text-base" />
              <Input placeholder="Почта" name="email" className="text-base" />
              <Input placeholder="Телефон" name="phone" className="text-base" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Адрес доставки">
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
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">3290 ₽</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-1 text-gray-300" />
                  Стоимость товаров:
                </div>
              }
              value="3000 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-1 text-gray-300" />
                  Сервисный сбор:
                </div>
              }
              value="90 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-1 text-gray-300" />
                  Стоимость доствки:
                </div>
              }
              value="200 ₽"
            />
            <Button type="submit" className="w-full mt-6 h-14 rounded-2xl text-base font-bold">
              Перейти к оплате
              <ArrowRight className="ml-2 w-5" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
