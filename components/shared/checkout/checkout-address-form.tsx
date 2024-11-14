'use client';

import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input, Textarea } from '@/components/ui';

interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
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
  );
};
