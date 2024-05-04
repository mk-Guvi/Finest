"use client";
import React, { useEffect, useState } from "react";
import {
  goalSectionFiltersLabel,
  goalSectionSortLabel,
  goalSectionTitle,
} from "./constants";
import { AlertCircle, Filter, ListFilter, Search } from "lucide-react";
import { GoalSectionSortSelect } from "./GoalSectionSortSelect";
import { Input } from "@/components/ui/input";
import GoalSectionSearchInput from "./GoalSectionSearchInput";
import GoalsCard from "./GoalsCard";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

function GoalSectionDesktopView({}: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="w-full border-y md:border md:p-3 bg-white md:rounded-2xl relative  drop-shadow-md">
      <header className="md:border-b px-3 md:px-0  py-3 gap-3.5 flex flex-wrap items-center">
        <p className="text-sm font-semibold flex-1 min-w-36">
          {goalSectionTitle}
        </p>
        <div className="hidden md:flex items-center gap-1 text-xs text-selected-text">
          <p className="font-medium">{goalSectionFiltersLabel}</p>
          <Filter size={12} />
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-xs text-selected-text">
          <p className="font-medium text-gray-600">{goalSectionSortLabel}</p>
          <GoalSectionSortSelect />
        </div>
        <GoalSectionSearchInput />
        <ListFilter
          className="md:hidden block rounded-full border p-2 shadow text-fabits-primary-300"
          size={34}
        />
      </header>
      <div className="flex md:hidden items-center justify-center gap-1 bg-background border-y py-3 text-gray-600 text-xs font-medium">
        <AlertCircle size={15}/> <p>Tap on a card to view more information</p>
      </div>
      <section className="p-3 flex  gap-5 flex-wrap">
        {loading ? (
          <>
            <Skeleton className=" w-72 h-96 rounded-3xl" />
            <Skeleton className=" w-72 h-96 rounded-3xl" />
            <Skeleton className=" w-72 h-96 rounded-3xl" />
            <Skeleton className=" w-72 h-96 rounded-3xl" />
            <Skeleton className=" w-72 h-96 rounded-3xl" />
          </>
        ) : (
          <>
            <GoalsCard
              progress="11,24,00,000"
              aheadBy={16}
              health="EXCELLENT"
              date="March 2035"
              currentValue={80}
              expectedValue={60}
              goalAmount="15,00,00,000"
            />
            <GoalsCard
              progress="2,70,00,000"
              health="GOOD"
              date="March 2035"
              currentValue={60}
              expectedValue={60}
              goalAmount="5,00,00,000"
            />
            <GoalsCard
              progress="42,00,000"
              health="WEAK"
              date="March 2035"
              goalAmount="1,00,00,000"
              behindBy={2}
              currentValue={50}
              expectedValue={65}
            />
            <GoalsCard
              progress="11,24,00,000"
              health="POOR"
              date="March 2035"
              goalAmount="15,00,00,000"
              behindBy={18}
              currentValue={30}
              expectedValue={60}
            />
            <GoalsCard
              progress="11,24,00,000"
              health="NEUTRAL"
              date="March 2035"
              goalAmount="15,00,00,000"
              currentValue={80}
              expectedValue={100}
              goalReachedBy={3}
              goalReachedAt="March 2035"
            />
          </>
        )}
      </section>
    </div>
  );
}

export default GoalSectionDesktopView;
