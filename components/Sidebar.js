import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
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
        <SidebarLink text="Explore" Icon={FaHashtag} />
        <SidebarLink text="Notifications" Icon={BsBell} />
        <SidebarLink text="Messages" Icon={AiOutlineInbox} />
        <SidebarLink text="Bookmarks" Icon={BsBookmarkHeart} />
        <SidebarLink text="Lists" Icon={BsClipboard} />
        <SidebarLink text="Profile" Icon={HiOutlineUser} />
        <SidebarLink text="More" Icon={TbDotsCircleHorizontal} />
      </div>
      <button
        className="xl:inline ml-auto  rounded-full w-56 h-[52px] 
    text-lg font-bold shadow-md  text-white"
      >
        <div
          className="text-[#d9d9d9] flex items-center justify-center
    hoverAnimation xl:ml-auto xl:mr-2.5 mt-auto"
          onClick={signOut}
        >
          <img
            src={session.user.image}
            alt=""
            className="w-10 h-10 rounded-full xl:mr-2.5"
          />
          <div className="hidden xl:inline leading-5">
            <h4 className="font-bold">{session.user.name}</h4>
            <p className="text-[#6e767d]">@{session.user.tag}</p>
          </div>
          <BsThreeDots className="h-5 hidden xl:inline ml-10" />
        </div>
      </button>
    </div>
  );
}

export default sidebar;
