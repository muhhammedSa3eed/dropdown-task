import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";


// & type of props
type FinalSelectionProps = {
  options: string[];
};

export default function FinalSelection({ options }: FinalSelectionProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Options" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((current, index) => (
            <SelectItem value={current} key={index}>
              {current}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
