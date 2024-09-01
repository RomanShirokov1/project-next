import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input, RangeSlider } from '../ui';
import { CheckboxFilterGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
      <Title text="Фильтрация" size="md" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Инпуты и слайдер цены */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1500} defaultValue={0} />
          <Input type="number" placeholder="1500" min={100} max={1500} />
        </div>
        <RangeSlider min={0} max={1500} step={10} value={[0, 1500]} />
      </div>

      {/* Нижние чекбоксы */}
      <CheckboxFilterGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '3',
          },
          {
            text: 'Моццарелла',
            value: '4',
          },
          {
            text: 'Чеснок',
            value: '5',
          },
          {
            text: 'Солённые огурчики',
            value: '6',
          },
          {
            text: 'Красный лук',
            value: '7',
          },
          {
            text: 'Томаты',
            value: '8',
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '3',
          },
          {
            text: 'Моццарелла',
            value: '4',
          },
          {
            text: 'Чеснок',
            value: '5',
          },
          {
            text: 'Солённые огурчики',
            value: '6',
          },
          {
            text: 'Красный лук',
            value: '7',
          },
          {
            text: 'Томаты',
            value: '8',
          },
          {
            text: 'Сырный соус',
            value: '9',
          },
          {
            text: 'Моццарелла',
            value: '10',
          },
          {
            text: 'Чеснок',
            value: '11',
          },
          {
            text: 'Солённые огурчики',
            value: '12',
          },
          {
            text: 'Красный лук',
            value: '13',
          },
          {
            text: 'Томаты',
            value: '14',
          },
        ]}
      />
    </div>
  );
};
