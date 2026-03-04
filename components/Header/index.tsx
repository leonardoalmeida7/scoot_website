"use client";

import { useEffect, useState } from "react";

import { Sidebar } from "@/components/Sidebars";

import { Hero } from "@/components/Hero";
import { TopBars } from "../TopBars";

export function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  // Bloqueia apenas a rolagem vertical quando o sidebar está aberto
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflowY = isOpenSidebar ? "hidden" : "";
    document.documentElement.style.overflowY = isOpenSidebar ? "hidden" : "";

    return () => {
      document.body.style.overflowY = "";
      document.documentElement.style.overflowY = "";
    };
  }, [isOpenSidebar]);

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