"use client";
import { NavLink } from "@/ui/NavLink";

interface NavLinksListProps {
  itsHeader?: boolean;
  setIsOpen?: (value: boolean) => void;
}

export function NavLinksList({ itsHeader, setIsOpen }: NavLinksListProps ) {
  return (
    <ul className={`flex flex-col items-center md:flex-row gap-5 ${itsHeader ? "mt-[55%] items-start text-lg text-snow" : "text-dim-grey"}`}>
      <NavLink href="/about" onClick={() => setIsOpen && setIsOpen(false)}>About</NavLink>
      <NavLink href="/location" onClick={() => setIsOpen && setIsOpen(false)}>Location</NavLink>
      <NavLink href="/careers" onClick={() => setIsOpen && setIsOpen(false)}>Careers</NavLink>
    </ul>
  );
}
