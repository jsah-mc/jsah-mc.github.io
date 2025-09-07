"use client";
import TopBar from "./topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopBar />
      <h1 className="text-5xl animate-bounce">
        Hello my name is{" "}
        <strong className="text-primarylight dark:text-primarydark">
          Joseph
        </strong>
      </h1>
      <p>This is my webpage</p>
      {/* <Image
        src="/longwall.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      /> */}
    </div>
  );
}
