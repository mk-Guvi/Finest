import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MoreHorizontalIcon, MoreVertical } from "lucide-react";

function ProfileComponent({isAvatarOnly}:{isAvatarOnly:boolean}) {
  const [profile, setProfile] = useState({
    name: "Dhruv",
    email: "dhruv@fabits.com",
    profileImage: "https://github.com/shadcn.png",
  });
  return (
    <div className={`${isAvatarOnly?"":"bg-primary"} flex items-center justify-center rounded-xl px-3 py-2.5 gap-3`}>
      <Avatar>
        <AvatarImage src={profile.profileImage} alt={profile.name} />
        <AvatarFallback>{profile.name}</AvatarFallback>
      </Avatar>
      {isAvatarOnly?null:<div className="flex-1 flex flex-col truncate gap-0.5">
        <div className="flex items-center gap-1">
          <p className="flex-1 font-semibold overflow-clip">{profile.name}</p>
          <MoreVertical
            size={21}
            className="text-gray-600 cursor-pointer hover:bg-primary/50 border border-transparent hover:border-gray-200  rounded-md p-1"
          />
        </div>
        <p className="text-xs text-gray-600 overflow-clip">{profile.email}</p>
      </div>}
      
    </div>
  );
}

export default ProfileComponent;
