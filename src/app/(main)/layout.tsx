"use client";
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/Sidebar";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  Bell,
  BellRingIcon,
  ChevronsRightLeftIcon,
  CircleUser,
  File,
  HandCoins,
  Home,
  HomeIcon,
  Inbox,
  Menu,
  Monitor,
  PackagePlus,
  Send,
  Shell,
  ShieldPlus,
  Sidebar,
  Trash2,
} from "lucide-react";
import { Fragment, use, useEffect, useState } from "react";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="w-full h-full sidebar-scroll flex md:flex-row flex-col">
      <AppSidebar/>
      <AppHeader/>
      
      <div className="overflow-y-auto overflow-x-hidden flex-1 h-full py-[3rem] px-[1.3rem]">
        {" "}
        {children}
      </div>
    </div>
  );
}
