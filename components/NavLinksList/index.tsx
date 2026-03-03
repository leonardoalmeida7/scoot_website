import { NavLink } from "@/ui/NavLink";

interface NavLinksListProps {
  itsHeader?: boolean;
}

export function NavLinksList({ itsHeader }: NavLinksListProps ) {
  return (
    <ul className={`flex flex-col items-center gap-5 ${itsHeader ? "mt-[55%] items-start text-lg text-snow" : "text-dim-grey"}`}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Location</NavLink>
      <NavLink href="#">Careers</NavLink>
    </ul>
  );
}
