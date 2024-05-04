"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";
export type SliderTypeT="GREEN"|"WARNING"|"ERROR"|"NEUTRAL"
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    expected: number;
    sliderType:SliderTypeT
  }
>(({ className, expected, value, sliderType,...props }, ref) => {
  const { currentWidth, expectedWidth, expectedMarginLeft } =
    React.useMemo(() => {
      const current = value?.[0] || 0;
      const currentWidth = current <= expected ? current : expected;
      const expectedWidth = Math.abs(expected - current);
      const expectedMarginLeft = currentWidth;
      return {
        currentWidth,
        expectedWidth,
        expectedMarginLeft,
      };
    }, [expected, value]);

    const {rangeClass,trackClass,expectedClass}=React.useMemo(() => {
      if(sliderType==="GREEN"){
        return {
          rangeClass:"bg-selected-green",
          trackClass:"bg-secondary",
          expectedClass:"linear-gradient-green"
        }
      }else if(sliderType==="WARNING"){
        return {
          rangeClass:"bg-warning-primary",
          trackClass:"bg-warning-secondary",
          expectedClass:"linear-gradient-warning"
        }
      }else if(sliderType==="ERROR"){
        return {
          rangeClass:"bg-error-primary",
          trackClass:"bg-error-secondary",
          expectedClass:"linear-gradient-error"
        }
      }
      
      
        return {
          rangeClass:"bg-twilight-blue",
          trackClass:"bg-twilight-blue-secondary",
          expectedClass:"linear-gradient-twilight"
        }
      
    }, [sliderType]);


  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      value={value}
      {...props}
    >
      <SliderPrimitive.Track className={`relative h-2 w-full grow overflow-hidden rounded-full ${trackClass} `}>
        <SliderPrimitive.Range
          className={`absolute h-full ${rangeClass}`}
          style={{
            width: `${currentWidth}%`,
          }}
        />
        <div
          className={cn(`${expectedClass}`, "absolute", "h-full")}
          style={{
            width: `${expectedWidth}%`,
            marginLeft: `${expectedMarginLeft}%`,
          }}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="items-center justify-center h-5 w-5 z-50 rounded-full  shadow-md bg-background ring-offset-selected-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex">
        <div className={`${rangeClass} rounded-full h-2 w-2 `}/>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
