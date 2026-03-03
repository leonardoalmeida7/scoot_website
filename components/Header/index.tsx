"use client";

import { useState } from "react";

import { Sidebar } from "@/components/Sidebars";

import { Hero } from "@/components/Hero";
import { TopBars } from "../TopBars";

export function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    // Bloqueia rolagem lateral quando o sidebar está aberto
    if (typeof window !== "undefined") {
      document.body.style.overflowY = isOpenSidebar ? "hidden" : "auto";
    }

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <header>
        <div>
            <TopBars isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
            <Sidebar isOpen={isOpenSidebar} />
          </div>
          <Hero isOpenSidebar={isOpenSidebar} />
    </header>
  );
}