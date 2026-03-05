import { NavLink } from "@/ui/NavLink";

interface NavLinksListProps {
  itsHeader?: boolean;
}

export function NavLinksList({ itsHeader }: NavLinksListProps ) {
  return (
    <ul className={`flex flex-col items-center gap-5 ${itsHeader ? "mt-[55%] items-start text-lg text-snow" : "text-dim-grey"}`}>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/location">Location</NavLink>
      <NavLink href="/careers">Careers</NavLink>
    </ul>
  );
}
