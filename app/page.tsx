import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 2,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 3,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 4,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 5,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 6,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 7,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                  {
                    id: 8,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    price: 500,
                    items: [{ price: 500 }],
                  },
                ]}
              />

              <ProductsGroupList
                title="Завтрак"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Сырники со сгущенкой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: 'Сырники со сгущенкой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: 'Сырники со сгущенкой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 4,
                    name: 'Сырники со сгущенкой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                  {
                    id: 5,
                    name: 'Сырники со сгущенкой',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61877A2EE09AA2178718EFB59C.avif',
                    price: 200,
                    items: [{ price: 200 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
