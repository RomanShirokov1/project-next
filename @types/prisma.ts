import { Ingredient, Product, ProductItem } from '@prisma/client';

export type ProductWithRelations = Product & { ProductItems: ProductItem[]; ingredients: Ingredient[] } ;