import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface TopBarsProps {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
}

export function TopBars({ isOpenSidebar, toggleSidebar }: TopBarsProps) {
  return (
    <div className="bg-snow p-4 z-100 relative">
      <div className="w-1/2 flex items-center justify-between">
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
        <h1 className="font-bold text-3xl text-center text-dark-navy translate-x-1/2">
          scoot
        </h1>
      </div>
    </div>
  );
}
