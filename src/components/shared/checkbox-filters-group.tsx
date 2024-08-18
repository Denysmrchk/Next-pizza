"use client";
import React from "react";
import {
  FilterChecboxProps,
  FilterCheckbox,
} from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  selectedIds?: Set<string>;
  onClickCheckbox?: (value: string) => void;
  loading?: boolean;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  selectedIds,
  onClickCheckbox,
  loading,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : (defaultItems || items)?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full mb-4 h-6 bg-gray-200 rounded-[8px] animate-pulse"
            />
          ))}

        <div className="w-28 h-4 bg-gray-200 rounded-[8px] animate-pulse" />
      </div>
    );
  }
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            value={searchValue}
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list &&
          list.map((item, index) => (
            <FilterCheckbox
              key={index}
              text={item.text}
              value={item.value}
              endAdornment={item.endAdornment}
              checked={selectedIds?.has(item.value)}
              onCheckedChange={() => onClickCheckbox?.(item.value)}
              name={name}
            />
          ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Close" : "+ Show All"}
          </button>
        </div>
      )}
    </div>
  );
};
