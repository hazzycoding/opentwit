import Image from "next/image";
import SidebarLink from "./SidebarLink";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
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
        <button>
          <SidebarLink text="Home" Icon={AiFillHome} active />
        </button>
        <button>
          {" "}
          <SidebarLink text="Profile" Icon={HiOutlineUser} />
        </button>
        <button>
          <SidebarLink text="Settings" Icon={FiSettings} />
        </button>
        <button>
          <SidebarLink text="Notification" Icon={AiOutlineInbox} />
        </button>
        <button onClick={signOut}>
          <SidebarLink text="Logout" Icon={RiLogoutCircleRLine} />
        </button>
      </div>
      <button className="hidden xl:inline ml-auto  text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md ">
        <div
          className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
          onClick={signOut}
        >
          <img
            src={session.user.image}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
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
