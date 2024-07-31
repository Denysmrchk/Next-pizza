import { Container, Filters, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text={"All pizzas"} size={"lg"} className={"font-extrabold"} />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[70px]">
          <div className="w-[250xp]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">List products</div>
            <ProductsGroupList
              title={"Pizzas"}
              categoryId={2}
              items={[
                {
                  id: 1,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
            />{" "}
            <ProductsGroupList
              title={"Combo"}
              categoryId={3}
              items={[
                {
                  id: 1,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "chisburger-pizza",
                  imageUrl:
                    "https://dyadyapizza.com/image/product/9b3c955428e00e6d8991ca4125d3e844.png",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
