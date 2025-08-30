import { FaHouse, FaGithub, FaUser } from "react-icons/fa6";
const SideBar = () => {
    const sidebarpos = 'right';
    const SideBarIcon = ({ icon, tooltip }) => (
        <div className="relative group flex justify-center">
            <div className="sidebar-icons">
                {icon}
            </div>
            {/* Tooltip below the icon */}
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-max px-2 py-1 rounded bg-text text-base text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                {tooltip}
            </span>
        </div>
    );
    const SideBarIconEnd = ({ icon, tooltip, ClickFunc }) => (
        <div className="relative group flex justify-center mt-auto">
            <div onClick={ClickFunc} className="sidebar-icons-end">
                <span>{icon}</span>
            </div>
            <span  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 rounded bg-text text-base text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                {tooltip}
            </span>
        </div>
    );
    return (
        <div className="bg-transparent m-0">
            <div className="fixed left-4 top-4 bottom-4 w-16 flex flex-col bg-overlay text-text shadow rounded-full">
                <SideBarIcon icon={<FaHouse size="28" />} tooltip="Home" ClickFunc={() => {window.open("/")}} />
                <SideBarIcon icon={<FaUser size="28" />} tooltip="" />
                <SideBarIconEnd ClickFunc={() => { window.open("https://github.com/jsah-mc", "_blank") }} icon={<FaGithub size="28" />} tooltip="GitHub" />
            </div>
        </div>
    );
};

export default SideBar
