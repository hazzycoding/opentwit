import Image from "next/image";
import SidebarLink from "./SidebarLink";
import Profile from "../components/Profile";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

import { RiLogoutCircleRLine } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";

function sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col itmes-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={AiFillHome} active />

        <SidebarLink text="Profile" Icon={HiOutlineUser} />

        <SidebarLink text="Settings" Icon={FiSettings} />

        <SidebarLink text="Notification" Icon={AiOutlineInbox} />
      </div>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation ml:mt-60 xl:ml-24 xl:mt:80 mb-100  sm: mt:20 mb-100 sm:ml-0">
        <button onClick={signOut}>
          <img
            src={session.user.image}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
        </button>
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session.user.name}</h4>
          <p className="text-[#6e767d]">@{session.user.tag}</p>
        </div>
        <button onClick={signOut}>
          <RiLogoutCircleRLine className="h-10 hidden xl:inline ml-10 font-bold cursor-pointer" />
        </button>
      </div>
    </div>
  );
}

export default sidebar;
