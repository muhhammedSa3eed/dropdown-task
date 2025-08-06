import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  title: string;
  lable: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  value: string;
  onChange: (val: string) => void;
};

export function SelectDemo({
  title,
  lable,
  value1,
  value2,
  value3,
  value4,
  value,
  onChange,
}: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{lable}</SelectLabel>
          <SelectItem value={value1}>{value1}</SelectItem>
          <SelectItem value={value2}>{value2}</SelectItem>
          <SelectItem value={value3}>{value3}</SelectItem>
          <SelectItem value={value4}>{value4}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
