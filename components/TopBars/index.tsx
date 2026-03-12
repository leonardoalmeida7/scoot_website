import Link from "next/dist/client/link";
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { NavLinksList } from "../NavLinksList";
import { ButtonDefault } from "@/ui/buttonDefault";

interface TopBarsProps {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
}

export function TopBars({ isOpenSidebar, toggleSidebar }: TopBarsProps) {
  return (
    <div className="bg-snow flex md:justify-between md:items-center p-4 md:px-6 z-100 relative">
      <div className="w-1/2 md:hidden">
        {isOpenSidebar ? (
          <IoIosClose
            className="text-yellow cursor-pointer text-4xl"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars
            className="text-yellow cursor-pointer text-2xl"
            onClick={toggleSidebar}
          />
        )}
      </div>
        <h1 className="font-bold text-3xl md:text-5xl text-center text-dark-navy -translate-x-1/2 md:translate-0">
          <Link href="/">scoot</Link>
        </h1>
        <div className="hidden md:block">
          <NavLinksList itsHeader={false} />
        </div>
        <div >
          <ButtonDefault>Get Scootin</ButtonDefault>
        </div>
    </div>
  );
}
