'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/categories';
import React from 'react';

interface Props {
  className?: string;
}

const categories = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Завтрак' },
  { id: 3, name: 'Комбо' },
  { id: 4, name: 'Закуски' },
  { id: 5, name: 'Коктейли' },
  { id: 6, name: 'Кофе' },
  { id: 7, name: 'Напитки' },
  { id: 8, name: 'Десерты' },
];
const activeIdex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex itms-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href={`/#${name}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
