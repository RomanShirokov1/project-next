'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="6ee79171949e5876cf5787a37199959b1a6609e8"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
