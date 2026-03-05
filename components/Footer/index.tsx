import { NavFooter } from "../NavFooter";
import { NavLinksList } from "../NavLinksList";
import { SignUpInStoreContainer } from "../SignUpInStoreContainer";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-dim-grey text-center">
      <SignUpInStoreContainer />
      <NavFooter />
    </footer>
  );
}
