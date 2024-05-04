"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import NoteStackImage from "../../../../public/images/note_stack_add.svg";
import { carouselItems, carouselSubTitle, carouselTitle } from "./constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PlanSectionMobileView() {
  return (
    <div className=" md:hidden flex flex-col gap-4">
      <div className="flex items-center gap-1">
        <ChevronLeft className="text-gray-600" size={16} />
        <p className="text-xs font-semibold">Plan a Goal</p>
      </div>
      <div className="border-y flex flex-col bg-white gap-1 py-6 px-4">
        <p className="font-semibold text-sm">{carouselTitle}</p>
        <p className="text-gray-500 text-xs">{carouselSubTitle}</p>

        <Carousel className="w-full my-4 ">
          <CarouselContent>
            {carouselItems?.map((eachItem, i) => {
              return (
                <CarouselItem
                  className="basis-1/3 sm:basis-1/4 md:basis-1/4 lg:basis-1/6 flex  justify-center items-center "
                  key={i}
                >
                  <a
                    href={eachItem.link}
                    target="_blank"
                    className="hover:shadow-lg  border  flex p-3.5 rounded-lg transition-all duration-200 flex-col gap-1  w-32 group"
                  >
                    <div className="flex items-start gap-2 justify-between">
                      <eachItem.icon
                        className="rounded-full p-2  bg-[#445689] text-[#D7EFA3]"
                        size={40}
                      />
                      <ChevronRight
                        className="group-hover:visible invisible text-selected-text"
                        size={16}
                      />
                    </div>
                    <p className="font-semibold text-xs mt-2">
                      {eachItem.title}
                    </p>

                    <p className="text-gray-500 text-[0.6rem]">{eachItem.Subtitle}</p>
                  </a>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="!left-1 " />
          <CarouselNext className="!right-1" />
        </Carousel>
      </div>
    </div>
  );
}
