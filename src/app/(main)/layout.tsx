"use client";
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/Sidebar";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <div className="w-full h-full sidebar-scroll flex md:flex-row flex-col">
      <AppSidebar/>
      <AppHeader/>
      
      <div className="overflow-y-auto overflow-x-hidden flex-1 h-full py-[1rem] md:py-[3rem] md:px-[1.3rem]">
        {" "}
        {children}
      </div>
    </div>
  );
}
