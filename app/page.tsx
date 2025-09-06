import SideBar from "./sidebar";

export default function Home() {
  return (
    <div>
      <div className="fixed">
        <SideBar />
      </div>
      <p className="animate-wiggle bg-transparent transition-all duration-1000">
        Wassup
      </p>
    </div>
  );
}
