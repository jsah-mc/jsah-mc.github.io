"use client";
import "./globals.css";
import { useState } from "react";
import TopBar from "./topbar";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <TopBar page={page} setPage={setPage} />
      {page === "home" && (
        <section>
          <h1 className="text-5xl animate-bounce">
            Hello my name is{" "}
            <strong className="text-primarylight dark:text-primarydark">
              Joseph
            </strong>
          </h1>
          <p>This is my webpage</p>
        </section>
      )}
      {page === "about" && (
        <section>
          <h2 className="text-3xl">About</h2>
          <p>This is the about section.</p>
        </section>
      )}
      {page === "contact" && (
        <section>
          <h2 className="text-3xl">Contact</h2>
          <p>You can contact me at ...</p>
        </section>
      )}
    </div>
  );
}
