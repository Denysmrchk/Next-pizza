"use client";
import { Title } from "@/components/shared";
import { Input } from "../ui/input";
import { RangeSlider } from "@/components/ui/range-slider";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";
import React from "react";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters = () => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  useQueryFilters(filters);
  const items = ingredients.map((ingredient) => ({
    value: String(ingredient.id),
    text: ingredient.name,
  }));
  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };
  return (
    <div className="">
      <Title text={"Filters"} size={"sm"} className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Crust Type"
        name={"pizzaTypes"}
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selectedIds={filters.pizzaTypes}
        items={[
          { text: "Thin", value: "1" },
          { text: "Regular", value: "2" },
        ]}
      />
      <CheckboxFiltersGroup
        title="Sizes"
        name={"sizes"}
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selectedIds={filters.sizes}
        items={[
          { text: "20 sm", value: "20" },
          { text: "30 sm", value: "30" },
          { text: "40 sm", value: "40" },
        ]}
      />
      <div className="mt-10 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type={"number"}
            placeholder={"0"}
            min={0}
            max={String(filters.prices.priceTo)}
            defaultValue={0}
            value={String(filters.prices.priceFrom)}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type={"number"}
            placeholder={"100"}
            min={String(filters.prices.priceFrom)}
            max={100}
            value={String(filters.prices.priceTo)}
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={100}
          step={5}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 0]}
          onValueChange={updatePrices}
        />
      </div>
      <CheckboxFiltersGroup
        title={"Ingredients"}
        name="ingredients"
        limit={6}
        className={"mt-5"}
        defaultItems={items.slice(0, 5)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedIds={filters.selectedIngredients}
      />
    </div>
  );
};
