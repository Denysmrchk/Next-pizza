"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {}

const cats = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combo" },
  { id: 3, name: "Cocktails" },
  { id: 4, name: "Desert" },
  { id: 5, name: "Coffee" },
];
const activeIndex = 0;

export const Categories: React.FC<Props> = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl")}>
      {cats.map(({ name, id }, index) => (
        <a
          key={index}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id + 1 &&
              "bg-white shadow-md shadow-gray-200 text-primary",
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
