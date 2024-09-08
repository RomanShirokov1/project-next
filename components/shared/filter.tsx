'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { Input, RangeSlider } from '../ui';
import { CheckboxFilterGroup } from './checkbox-filters-group';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  return (
    <div className={cn('mx-auto max-w-[1280px]', className)}>
      <Title text="Фильтрация" size="md" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <CheckboxFilterGroup
        title="Тип теста"
        name="pizzaTypes"
        className="mb-5"
        items={[
          { text: 'Тонкое', value: '1' },
          { text: 'Традиционное', value: '2' },
        ]}
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
      />

      <CheckboxFilterGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
      />

      {/* Инпуты и слайдер цены */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1500}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1500"
            min={100}
            max={1500}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1500}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1500]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Нижние чекбоксы */}
      <CheckboxFilterGroup
        title="Ингридиенты"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </div>
  );
};
