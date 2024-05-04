"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { goalSectionSortOptions } from "./constants";

export function GoalSectionSortSelect({onChange}:{onChange:()=>void}) {
  const [selectedValue, setSelectedValue] = useState(goalSectionSortOptions[0]);

  const handleSelectChange = (value: string) => {
    onChange()
    setSelectedValue(goalSectionSortOptions.find((e) => e.value == value)!);
  };

  return (
    <Select
      value={selectedValue.value}
      defaultValue="HTL"
      onValueChange={handleSelectChange}
    >
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Select SortBy">
          {selectedValue.label}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {goalSectionSortOptions?.map((each) => {
          return (
            <SelectItem value={each.value} key={each.value}>
              {each.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
