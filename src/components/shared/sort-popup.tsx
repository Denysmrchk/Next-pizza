import React from "react";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <b>Sort:</b>
      <b className="text-primary">popular</b>
    </div>
  );
};
