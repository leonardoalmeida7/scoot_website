import { ButtonDefault } from "@/ui/buttonDefault";
import { NavLinksList } from "../NavLinksList";

interface SidebarProps {
  isOpen: boolean;
}   

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <div className={`bg-dark-navy absolute top-0 -translate-x-full w-1/2 h-full p-4 z-10 flex flex-col justify-between ${isOpen && "translate-x-0"} transition duration-400`}>
      <NavLinksList itsHeader={true} />
      <ButtonDefault className="mb-10">Get Scooting</ButtonDefault>
    </div>
  );
}
