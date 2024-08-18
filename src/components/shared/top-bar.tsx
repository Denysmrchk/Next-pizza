import React from "react";
import { Container } from "@/components/shared/container";
import { Categories } from "@/components/shared/categories";
import { SortPopup } from "@/components/shared/sort-popup";
import { Category } from "@prisma/client";
import { cn } from "@/shared/lib/utils";

interface Props {
  categories: Category[];
}

export const TopBar: React.FC<Props> = ({ categories }) => {
  return (
    <div
      className={cn("sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10")}
    >
      <Container className="flex items-center justify-between">
        <Categories items={categories} />
        <div className="flex items-center">
          <SortPopup />
        </div>
      </Container>
    </div>
  );
};
