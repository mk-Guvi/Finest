"use client";
import React, { useEffect, useState } from "react";
import {
  goalSectionFiltersLabel,
  goalSectionSortLabel,
  goalSectionTitle,
} from "./constants";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  ListFilter,
  Search,
} from "lucide-react";
import { GoalSectionSortSelect } from "./GoalSectionSortSelect";
import { Input } from "@/components/ui/input";
import GoalSectionSearchInput from "./GoalSectionSearchInput";
import GoalsCard from "./GoalsCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useChangeListener } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {};

function GoalSectionDesktopView({}: Props) {
  const [loading, setLoading] = useState(true);
  const [changeWatcher, recordChanges] = useChangeListener(500);
  const [pagination, setPagination] = useState({
    totalPages: 4,
    currentPage: 1,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [changeWatcher]);

  const handlePagination = (type: "NEXT" | "PREVIOUS") => {
    setLoading(true);
    setPagination((prev) => {
      return {
        ...prev,
        currentPage:
          type == "NEXT" ? prev.currentPage + 1 : prev.currentPage - 1,
      };
    });
  };
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
          <GoalSectionSortSelect
            onChange={() => {
              setLoading(true);
              recordChanges();
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <GoalSectionSearchInput
            onChange={() => {
              setLoading(true);
              recordChanges();
            }}
          />
          <ListFilter
            className="md:hidden block rounded-full border p-2 shadow text-fabits-primary-300"
            size={34}
          />
        </div>
      </header>
      <div className="flex md:hidden items-center justify-center gap-1 bg-background border-y py-3 text-gray-600 text-xs font-medium">
        <AlertCircle size={15} /> <p>Tap on a card to view more information</p>
      </div>
      <section className="p-3 flex  gap-5 flex-wrap">
        {loading ? (
          [1, 2, 3, 4, 5].map((e) => {
            return (
              <Skeleton className="w-full sm:w-72 h-96 rounded-3xl" key={e} />
            );
          })
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
      <div className="flex items-center text-sm gap-3 p-3 md:p-0 justify-end">
        <p className="text-gray-500">
          showing{" "}
          <span className="text-gray-800">{pagination.currentPage}</span> of{" "}
          <span className="text-gray-800">{pagination.totalPages}</span>
        </p>
        <Button
          variant={"outline"}
          size={"sm"}
          disabled={pagination.currentPage === 1}
          onClick={() => {
            handlePagination("PREVIOUS");
            recordChanges();
          }}
          className="rounded-full"
        >
          <ChevronLeft size={15} />
        </Button>
        <Button
          variant={"outline"}
          disabled={pagination.currentPage === pagination.totalPages}
          onClick={() => {
            handlePagination("NEXT");
            recordChanges();
          }}
          size={"sm"}
          className="rounded-full"
        >
          <ChevronRight size={15} />
        </Button>
      </div>
    </div>
  );
}

export default GoalSectionDesktopView;
