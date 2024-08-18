import { Title } from "@/components/shared/title";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/components/ui";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  className?: string;
  onSubmit?: VoidFunction;
  loading?: boolean;
}

export const ChooseProductForm: React.FC<Props> = ({
  name,
  imageUrl,
  price,
  onSubmit,
  loading,
  className,
}) => {
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all duration-300 w-[350px] h-[350px]"
        />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size={"md"} className="font-extrabold mb-1" />
        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rouded-[18px] w-full mt-10"
        >
          Add to cart {price} $
        </Button>
      </div>
    </div>
  );
};
