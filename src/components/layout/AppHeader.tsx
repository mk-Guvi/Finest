import React from "react";
import Image from "next/image";

import finestLogo from "../../../public/images/fabits-logo.svg";

import { Bell, CircleUser, Menu } from "lucide-react";
import { useModal } from "../onBoarding/modal-provider";
import OnboardModal from "../onBoarding/onBoardingModal";
type Props = {};

function AppHeader({}: Props) {
  const {setOpen}=useModal()
  return (
    <header className="flex md:hidden items-center border-b  gap-4 p-[1rem] ">
      <Menu onClick={setOpen}/>
      <div className="flex-1">
        <Image
          src={finestLogo.src}
          alt="Finest"
          width={80}
          height={30}
          className="h-8 object-contain"
        />
      </div>
      <Bell />
      <CircleUser />
    </header>
  );
}

export default AppHeader;
