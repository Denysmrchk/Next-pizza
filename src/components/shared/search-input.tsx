"use client";
import { Search } from "lucide-react";
import React, { useRef, useState } from "react";
import { useClickAway, useDebounce } from "react-use";
import { Product } from "@prisma/client";
import Link from "next/link";
import { Api } from "@/shared/services/api-client";
import { cn } from "@/shared/lib/utils";

export const SearchInput = () => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [products, setProducts] = React.useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  const onClickItem = () => {
    setProducts([]);
    setSearchQuery("");
    setFocused(false);
  };

  useDebounce(
    async () => {
      const products = await Api.products.search(searchQuery);
      setProducts(products);
    },
    150,
    [searchQuery],
  );

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className="flex rounded-2xl flex-1 justify-between relative h-11 z-30"
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Find pizza..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className={cn(
            "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-12",
          )}
        >
          {products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div
                onClick={onClickItem}
                className="flex items-center gap-4 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              >
                <img
                  src={product.imageUrl}
                  alt={"search-image-product"}
                  width={65}
                  height={30}
                />
                {product.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
