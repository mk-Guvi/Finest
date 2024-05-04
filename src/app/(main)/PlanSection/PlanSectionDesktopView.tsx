"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import NoteStackImage from "../../../../public/images/note_stack_add.svg";
import { carouselItems, carouselSubTitle, carouselTitle } from "./constants";
import { ChevronRight } from "lucide-react";

export function PlanSectionDesktopView() {
  return (
    
    <Carousel className="w-full md:block hidden border bg-white rounded-2xl relative  drop-shadow-md">
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 pt-9 pl-9 lg:basis-1/4 xl:basis-1/6 2xl:basis-1/8">
          <div className="flex flex-col justify-between  h-32 gap-1">
            <p className="font-semibold text-sm">{carouselTitle}</p>
            <p className="text-gray-500 text-sm">{carouselSubTitle}</p>
            <Image
              height={80}
              width={80}
              src={NoteStackImage.src}
              alt="fin"
              // className="absolute bottom-0"
            />
          </div>
        </CarouselItem>
        {carouselItems?.map((eachItem, i) => {
          return (

            <CarouselItem
              className="md:basis-1/4 lg:basis-1/6 flex  justify-center items-center "
              key={i}
              
            >
              
              <a href={eachItem.link} target="_blank" className="hover:shadow-lg hover:border-gray-200 border border-transparent flex p-3.5 rounded-lg transition-all duration-200 flex-col gap-1  w-32 group">
              <div className="flex items-start gap-2 justify-between">
              <eachItem.icon
                className="rounded-full p-2  bg-[#445689] text-[#D7EFA3]"
                size={40}
              />
              <ChevronRight className="group-hover:visible invisible text-selected-text" size={16}/>
              </div>
              <p className="font-semibold text-xs mt-2">{eachItem.title}</p>
              
              
              <p className="text-gray-500 text-xs">{eachItem.Subtitle}</p>
              </a>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="!left-3 " />
      <CarouselNext className="!right-3" />
    </Carousel>
  );
}
