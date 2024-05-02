"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    expected: number;
  }
>(({ className, expected, value, ...props }, ref) => {
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
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
        <SliderPrimitive.Range className={`absolute h-full `} />
        <div
          className="absolute left-0 h-full bg-gradient-to-r from-red-500 to-black"
          
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: `${expected}%` }}
          height={"100%"}
          viewBox="0 0 82 8"
          fill="none"
        >
          <path
            d="M-15.0043 12L0.996948 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M-7.00366 12L8.99756 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M0.996948 12L16.9982 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.99756 12L24.9988 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16.9982 12L32.9994 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24.9988 12L41 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M32.9994 12L49.0006 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M41 12L57.0012 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M49.0006 12L65.0018 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M57.0012 12L73.0024 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M65.0018 12L81.0031 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M73.0024 12L89.0037 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M81.0031 12L97.0043 -4"
            stroke="#5B8350"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="items-center justify-center h-5 w-5 z-50 rounded-full border-2 border-primary bg-background ring-offset-selected-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 flex">
        <div className="bg-black rounded-full h-2 w-2 " />
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
