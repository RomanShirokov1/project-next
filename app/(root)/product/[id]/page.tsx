import { Container, ProductForm } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      ProductItems: true,
      category: {
        include: {
          products: {
            include: {
              ProductItems: true,
            },
          },
        },
      },
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="my-10 flex flex-row">
      <ProductForm product={product} />
    </Container>
  );
}
