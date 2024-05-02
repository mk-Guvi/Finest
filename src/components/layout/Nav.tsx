"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { buttonVariants } from "../ui/button";
type LinkEntityT = {
  title: string;
  icon?: LucideIcon;
};
interface NavProps {
  isCollapsed?: boolean;
  className?: string;
  links: {
    group?: { name: string; items: LinkEntityT[] };
    item?: LinkEntityT;
  }[];
}

export function Nav({ links, isCollapsed, className = "" }: NavProps) {
  return (
    <TooltipProvider>
      
        <div className={`group flex relative flex-col  gap-4 py-2  ${className}`}>
          <nav className="grid gap-1 ">
            {links.map((linkGroup, groupIndex) =>
              linkGroup.group ? (
                <div key={groupIndex} >
                  <div className="font-normal   my-2 text-gray-600 text-xs">
                    {linkGroup.group.name}
                  </div>
                  <div className="flex flex-col z-10 gap-1.5 w-full ">
                    {linkGroup.group.items.map((linkItem, itemIndex) =>
                      isCollapsed ? (
                        <Tooltip key={itemIndex}>
                        <TooltipTrigger >
                          <Link
                            href="#"
                            className={cn(
                              buttonVariants({
                                variant: "link-button",
                                size: "sm",
                              }),
                              !isCollapsed && "justify-start"
                            )}
                          >
                            {linkItem.icon && (
                              <linkItem.icon className="h-4 w-4" />
                            )}

                            {!isCollapsed && linkItem.title}
                          </Link>
                          <TooltipContent side="right">
                            <p>{linkItem.title}</p>
                          </TooltipContent>
                        </TooltipTrigger>
                        </Tooltip>
                      ) : (
                        <Link
                          key={itemIndex}
                          href="#"
                          className={cn(
                            buttonVariants({
                              variant: "link-button",
                              size: "sm",
                            }),
                            !isCollapsed && "justify-start"
                          )}
                        >
                          {linkItem.icon && (
                            <linkItem.icon className="h-4 w-4" />
                          )}

                          {!isCollapsed && linkItem.title}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ) : (
                linkGroup.item &&
                (isCollapsed ? (
                  <Tooltip  key={groupIndex} >
                  <TooltipTrigger >
                    <TooltipContent side="right">
                      <p>{linkGroup.item.title}</p>
                    </TooltipContent>

                    <Link
                      href="#"
                      className={cn(
                        "px-2 z-10",
                        buttonVariants({ variant: "link-button", size: "sm" }),
                        !isCollapsed && "justify-start"
                      )}
                    >
                      {linkGroup.item.icon && (
                        <linkGroup.item.icon className="h-4 w-4" />
                      )}

                      {!isCollapsed && linkGroup.item.title}
                    </Link>
                  </TooltipTrigger>
                  </Tooltip>
                ) : (
                  <Link
                    key={groupIndex}
                    href="#"
                    className={cn(
                      "px-2 z-10",
                      buttonVariants({ variant: "link-button", size: "sm" }),
                      !isCollapsed && "justify-start"
                    )}
                  >
                    {linkGroup.item.icon && (
                      <linkGroup.item.icon className="h-4 w-4" />
                    )}

                    {!isCollapsed && linkGroup.item.title}
                  </Link>
                ))
              )
            )}
          </nav>
        </div>
      
    </TooltipProvider>
  );
}
