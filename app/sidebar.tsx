"use client";

import { useState, MouseEventHandler, ReactNode } from "react";
import { FaHouse, FaGithub, FaUser } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

// ✅ Type definition for reusable icon components
interface IconProps {
  icon: ReactNode;
  tooltip: string;
  ClickFunc?: MouseEventHandler<HTMLDivElement>;
}

// ✅ Top icon component
const SideBarIcon: React.FC<IconProps> = ({ icon, tooltip, ClickFunc }) => (
  <div className="relative group flex justify-center">
    <div className="sidebar-icons" onClick={ClickFunc}>
      {icon}
    </div>
    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 rounded bg-textlight text-baselight dark:bg-textdark dark:text-basedark text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
      {tooltip}
    </span>
  </div>
);

// ✅ Bottom icon component
const SideBarIconEnd: React.FC<IconProps> = ({ icon, tooltip, ClickFunc }) => (
  <div className="relative group flex justify-center mt-auto">
    <div onClick={ClickFunc} className="sidebar-icons-end">
      <span>{icon}</span>
    </div>
    <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 rounded bg-textlight text-baselight dark:bg-textdark dark:text-basedark text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
      {tooltip}
    </span>
  </div>
);

// ✅ Main sidebar component
export default function SideBar() {
  const [showSecret, setShowSecret] = useState(false); // 🔧 toggle state

  return (
    <div className="fixed left-4 top-4 right-4 flex flex-row bg-overlaylight text-textlight dark:bg-overlaydark dark:text-textdark shadow rounded-full">
      <SideBarIcon
        icon={<FaHouse size={28} />}
        tooltip="Home"
        ClickFunc={() => window.open("/")}
      />

      <SideBarIcon
        icon={<FaUser size={28} />}
        tooltip="User"
        ClickFunc={() => setShowSecret((prev) => !prev)}
      />

      <span
        className={`transition-all duration-1000 ${
          showSecret ? "visible opacity-100" : "invisible opacity-0"
        } secret relative flex items-center justify-center h-12 w-12 m-2 mx-auto mt-auto`}
      >
        <SideBarIconEnd
          icon={<FaSmile size={28} />}
          tooltip="Secret"
          ClickFunc={() => console.log("Secret Found")}
        />
      </span>

      <SideBarIconEnd
        icon={<FaGithub size={28} />}
        tooltip="GitHub"
        ClickFunc={() => window.open("https://github.com/jsah-mc", "_blank")}
      />
    </div>
  );
}
