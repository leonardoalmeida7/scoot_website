import { NavLinksList } from "../NavLinksList";
import Image from "next/image";

export function NavFooter() {
  return (
    <footer className="bg-dim-grey text-center">
      <div className="bg-dark-navy p-12 md:p-6 md:flex justify-between items-center">
        <div>
          <h3 className="text-snow font-bold text-4xl my-8 md:my-0">scoot</h3>
        </div>
        <NavLinksList />
        <div className="flex justify-center gap-4 mt-12 md:mt-0 md:ml-25">
          <Image
            src="/icons/facebook.svg"
            alt="facebook icon"
            width={24}
            height={24}
          />
          <Image
            src="/icons/twitter.svg"
            alt="twitter icon"
            width={24}
            height={24}
          />
          <Image
            src="/icons/instagram.svg"
            alt="instagram icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
}
