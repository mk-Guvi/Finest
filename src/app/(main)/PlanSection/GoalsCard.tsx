import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider, SliderTypeT } from "@/components/ui/slider";
import { linkedIn } from "@/lib/constants";

import { Heart, HeartCrack, HeartPulse, Lightbulb } from "lucide-react";
import React, { useMemo } from "react";

type GoalsCardPropsT = {
  amountPrefix?: string;
  progress: string;
  date: string;
  health: "EXCELLENT" | "GOOD" | "WEAK" | "POOR" | "NEUTRAL";
  aheadBy?: number;
  behindBy?: number;
  goalAmount: string;
  goalReachedBy?: number;
  goalReachedAt?:string;
  currentValue:number;
  expectedValue:number
};

function GoalsCard(props: GoalsCardPropsT) {
  const { health, sliderType, subTitle } = useMemo(() => {
    if (props?.health == "EXCELLENT") {
      return {
        health: (
          <div className="flex items-center gap-1 text-[#5B8350]">
            <Heart size={15} />
            <p className="text-xs font-semibold">Excellent!</p>
          </div>
        ),
        sliderType: "GREEN",
        subTitle: (
          <p className="text-xs font-medium text-gray-700">
            Goal ahead by{" "}
            <span className="text-selected-green">{props?.aheadBy} months</span>
          </p>
        ),
      };
    } else if (props.health === "GOOD") {
      return {
        health: (
          <div className="flex items-center gap-1 text-[#5B8350]">
            <Heart size={15} />
            <p className="text-xs font-semibold">Good</p>
          </div>
        ),
        sliderType: "GREEN",
        subTitle: <p className="text-xs font-medium text-gray-700">On track</p>,
      };
    } else if (props.health === "WEAK") {
      return {
        health: (
          <div className="flex items-center gap-1 text-[#5B8350]">
            <Heart size={15} />
            <p className="text-xs font-semibold">Good</p>
          </div>
        ),
        sliderType: "WARNING",
        subTitle: (
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-gray-700">
              Goal behind by{" "}
              <span className="text-selected-green">
                {props?.behindBy} months
              </span>
            </p>
            <div className="flex items-center text-warning-primary bg-warning-secondary p-2 rounded-xl gap-2">
              <Lightbulb />
              <p className="text-xs font-medium">
                Boost to reach your goal sooner!
              </p>
            </div>
            <Button variant={"outline"}>Boost</Button>
          </div>
        ),
      };
    } else if (props.health === "POOR") {
      return {
        health: (
          <div className="flex items-center gap-1 text-[#E85D5D]">
            <HeartCrack size={15} />
            <p className="text-xs font-semibold">Poor</p>
          </div>
        ),
        sliderType: "ERROR",
        subTitle: (
          <p className="text-xs font-medium text-gray-700">
            Goal behind by{" "}
            <span className="text-warning-primary">
              {props?.behindBy} months
            </span>
          </p>
        ),
      };
    }
    return {
      health: <p className="text-sm font-semibold">{props.goalReachedAt}</p>,
      sliderType: "NEUTRAL",
      subTitle: (
        <p className="text-xs font-medium text-gray-700">
          Goal reached by{" "}
          <span className="text-warning-primary">
            {props?.goalReachedBy} months
          </span>{" "}
          ahead
        </p>
      ),
    };
  }, [props?.health, props?.aheadBy, props?.behindBy]);

  return (
    <a
      href={linkedIn}
      target="_blank"
      className="border rounded-3xl transition-all duration-300 hover:shadow-[0_4px_10px_rgba(36,47,78,0.12)] p-4 w-72"
    >
      <div className="flex items-start gap-4 border-b py-2 pb-4">
        <Avatar className="!rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-sm">
          Dhairyadev & Sayali’s Vacation Plan 1
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 gap-y-4 border-b py-3">
        <div className="flex flex-col gap-1">
          <p className="font-medium text-xs text-gray-500">Goal Progress</p>
          <p className="text-sm font-semibold">
            {props?.amountPrefix || "₹"} {props?.progress}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-xs text-gray-500">Goal Amount</p>
          <p className="text-sm font-semibold">
            {props?.amountPrefix || "₹"} {props?.goalAmount}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-xs text-gray-500">Goal Date</p>
          <p className="text-sm font-semibold">{props.date}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-xs text-gray-500">{props?.goalReachedAt?"Goal Reached":"Goal Progress"}</p>
          <div className="text-sm font-semibold">{health}</div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3   py-3 relative">
        <Slider
          sliderType={sliderType as SliderTypeT}
          value={[props.currentValue]}
          disabled
          expected={props.expectedValue}
        />
        {subTitle}
      </div>
    </a>
  );
}

export default GoalsCard;
