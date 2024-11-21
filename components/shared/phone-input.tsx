'use client';

import React from 'react';
import { IMaskMixin } from 'react-imask';

import { Input, InputProps } from '../ui/input';

interface PhoneInputProps extends InputProps {}

const MaskedPhoneInput = IMaskMixin(
  ({ inputRef, ...props }: { inputRef: React.Ref<HTMLInputElement> } & InputProps) => (
    <Input ref={inputRef} {...props} />
  ),
);

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <MaskedPhoneInput
        {...props}
        ref={ref}
        mask="+{7}(000)000-00-00"
        onAccept={onChange}
        placeholder={props.placeholder}
      />
    );
  },
);
