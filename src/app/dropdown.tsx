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
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  value: string;
  onChange: (val: string) => void;
};

export function SelectDemo({
  title,
  lable,
  option1,
  option2,
  option3,
  option4,
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
          <SelectItem value={option1}>{option1}</SelectItem>
          <SelectItem value={option2}>{option2}</SelectItem>
          <SelectItem value={option3}>{option3}</SelectItem>
          <SelectItem value={option4}>{option4}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
