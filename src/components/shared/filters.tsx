import { FilterCheckbox, Title } from "@/components/shared";
import { Input } from "../ui/input";
import { RangeSlider } from "@/components/ui/range-slider";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";

export const Filters = () => {
  return (
    <div className="">
      <Title text={"Filters"} size={"sm"} className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text={"Mozno sobirat`"} value="1" />
        <FilterCheckbox text={"New`"} value="2" />
      </div>
      <div className="mt-10 pb-7">
        <p className="font-bold mb-3">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type={"number"}
            placeholder={"0"}
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type={"number"} placeholder={"1000"} min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      <CheckboxFiltersGroup
        title={"Ingredients"}
        limit={6}
        className={"mt-5"}
        defaultItems={[]}
        items={[]}
      />
    </div>
  );
};
