"use client";

import { SelectDemo } from "@/app/dropdown";
import { SelectItem } from "@/components/ui/select";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "@/components/ui/select";
import { useState } from "react";
import FinalSelection from "./finalSelection/page";

export default function Home() {
  const [country, setCountry] = useState("");
  const [sport, setSport] = useState("");
  const [options, setOptions] = useState<string[]>([]);

  function handleCountryChange(val: string) {
    setCountry(val);
    setOptions((prev) => (prev.includes(val) ? prev : [...prev, val]));
  }

  function handleSportChange(val: string) {
    setSport(val);
    setOptions((prev) => (prev.includes(val) ? prev : [...prev, val]));
  }

  return (
    <div className="mx-auto w-[60%] font-semibold mt-20 p-5 bg-[#FAF9EE] rounded-2xl shadow-2xl">
      <div className="flex flex-row justify-evenly items-center">
        <label>Your Country </label>
        <SelectDemo
          value={country}
          onChange={handleCountryChange}
          title="Select Your Country"
          lable="Countries"
          option1="Egypt"
          option2="Spain"
          option3="France"
          option4="Miami"
        />
        <label>Fav Sport</label>
        <SelectDemo
          value={sport}
          onChange={handleSportChange}
          title="Select Your Favourite Sport"
          lable="Sports"
          option1="Football"
          option2="Tennis"
          option3="Handball"
          option4="Ragby"
        />
      </div>

      <div className="mt-10 w-[60%] mx-auto text-center p-3 flex justify-evenly items-center">
        {/* <select>
          {options.map((current, index) => (
            <option value={current} key={index}>
              {current}
            </option>
          ))}
        </select> */}
        <label>Options</label>
        <FinalSelection options={options}  />
      </div>
    </div>
  );
}
