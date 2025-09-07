"use client";

import { useState, MouseEventHandler, ReactNode } from "react";
import { Tooltip } from "@heroui/tooltip";
import { FaHouse, FaGithub, FaUser } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import { TbSourceCode } from "react-icons/tb";

// ✅ Type definition for reusable icon components
interface IconProps {
  icon: ReactNode;
  tooltip: string;
  ClickFunc?: MouseEventHandler<HTMLDivElement>;
}

// ✅ Top icon component
const TopBarIcon: React.FC<IconProps> = ({ icon, tooltip, ClickFunc }) => (
  <Tooltip
    content={tooltip}
    placement="right"
    showArrow={true}
    closeDelay={200}
  >
    <div className="TopBar-icons" onClick={ClickFunc}>
      {icon}
    </div>
  </Tooltip>
);

// ✅ Bottom icon component
const TopBarIconEnd: React.FC<IconProps> = ({ icon, tooltip, ClickFunc }) => (
  <Tooltip
    content={tooltip}
    placement="right"
    showArrow={true}
    closeDelay={200}
  >
    <div onClick={ClickFunc} className="TopBar-icons-end">
      <span>{icon}</span>
    </div>
  </Tooltip>
);

// ✅ Main TopBar component
export default function TopBar() {
  const [showSecret, setShowSecret] = useState(false); // 🔧 toggle state

  return (
    <div className="fixed w-20 top-4 left-4 bottom-4 flex flex-col rounded-full bg-overlaylight p-2 text-textlight shadow-lg dark:bg-overlaydark dark:text-textdark">
      <TopBarIcon
        icon={<FaHouse size={28} />}
        tooltip="Home"
        ClickFunc={() => window.open("/")}
      />

      <TopBarIcon
        icon={<FaUser size={28} />}
        tooltip="User"
        ClickFunc={() => setShowSecret((prev) => !prev)}
      />

      <span
        className={`transition-all duration-1000 ${
          showSecret ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <TopBarIcon
          icon={<FaSmile size={28} />}
          tooltip="Secret"
          ClickFunc={() => console.log("Secret Found")}
        />
      </span>
      <div className="flex flex-grow items-center justify-center text-center">
        <p className="2m-0 p-0">
          jsah
          <br></br>
          mc
        </p>
      </div>
      <div className="mt-auto">
        <TopBarIconEnd
          icon={<TbSourceCode size={28} />}
          tooltip="Source Code"
          ClickFunc={() =>
            window.open(
              "https://github.com/jsah-mc/jsah-mc.github.io",
              "_blank"
            )
          }
        />
        <TopBarIconEnd
          icon={<FaGithub size={28} />}
          tooltip="GitHub"
          ClickFunc={() => window.open("https://github.com/jsah-mc", "_blank")}
        />
      </div>
    </div>
  );
}
