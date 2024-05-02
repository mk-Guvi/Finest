'use client'
import React, { useState } from "react";
import finestLogo from "../../../public/images/fabits-logo.svg";
import finestMbLogo from "../../../public/images/fabits-logo-mb.svg";
import collapseIcon from "../../../public/images/collapse-content.svg";
import { Nav } from "@/components/layout/Nav";
import {
  Bell,
  HandCoins,
  HomeIcon,
  Monitor,
  PackagePlus,
  Shell,
  ShieldPlus,

} from "lucide-react";

import Image from "next/image";
import ProfileComponent from "../profile-component";


type Props = {};

function AppSidebar({}: Props) {
    const [isCollapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`flex-col relative  border-r hidden md:flex ${
        isCollapsed
          ? "w-[5rem] justify-center items-center px-[0.6rem]"
          : "w-[16rem] px-[1.3rem]"
      }   transition-all   duration-150 h-full py-[3rem]  gap-3`}
    >
      <div
        className="absolute -right-3.5 top-24 p-1 rounded-full border bg-white cursor-pointer hover:bg-secondary"
        onClick={() => {
          setCollapsed((prev) => !prev);
        }}
      >
        <Image
          height={20}
          width={20}
          className=""
          src={collapseIcon.src}
          alt="collapse"
        />
      </div>
      <div className="flex  items-center justify-between">
        <Image
          src={isCollapsed ? finestMbLogo.src : finestLogo.src}
          alt="Finest"
          width={80}
          height={30}
          className="h-8 object-contain"
        />
        {isCollapsed ? null : (
          <div className="p-2 rounded-full border">
            <Bell />
          </div>
        )}
      </div>
      <ProfileComponent isAvatarOnly={isCollapsed} />
      <Nav
        className="flex-1 sidebar-scroll"
        isCollapsed={isCollapsed}
        links={[
          {
            item: {
              title: "Home",
              icon: HomeIcon,
            },
          },
          {
            group: {
              name: "FINANCE",
              items: [
                {
                  title: "Plan a Goal",
                  icon: Shell,
                },
                {
                  title: "Discover Top Funds",
                  icon: Monitor,
                },
                {
                  title: "Investment",
                  icon: HandCoins,
                },
                {
                  title: "IPO",
                  icon: PackagePlus,
                },
              ],
            },
          },
          {
            group: {
              name: "Insurance",
              items: [
                {
                  title: "Insurance",
                  icon: ShieldPlus,
                },
              ],
            },
          },
        ]}
      />
      {isCollapsed ? (
        <div className="p-1 w-10 h-10 flex items-center justify-center rounded-full border">
          <Bell size={16} />
        </div>
      ) : null}
    </aside>
  );
}

export default AppSidebar;
