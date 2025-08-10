import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  key: string;
  label: string;
};

type Props = {
  title: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
};

export function SelectDemo({ title, options, value, onChange }: Props) {
  return (
    <div className="w-100 ">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((opt) => (
              <SelectItem key={opt.key} value={opt.key}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
