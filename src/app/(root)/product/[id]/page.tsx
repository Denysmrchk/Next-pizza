import { notFound } from "next/navigation";
import { Container, PizzaImage, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import { GroupVariants } from "@/components/shared/group-variants";
import { prisma } from "../../../../../prisma/prisma-client";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({ where: { id: Number(id) } });

  if (!product) {
    return notFound();
  }
  return (
    <Container className="flex my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={20} />
      </div>
      <div className="w-[490px] bg-[#FCFCFC] p-7">
        <Title text={product.name} size="md" className="font-extrabold mb-1" />
        <GroupVariants
          items={[
            { name: "Small", value: "1" },
            { name: "Medium", value: "2" },
            { name: "Big", value: "3" },
          ]}
        />
        <Button
          // loading={loading}
          // onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5"
        >
          Добавить в корзину за 200 ₽
        </Button>
      </div>
    </Container>
  );
}
