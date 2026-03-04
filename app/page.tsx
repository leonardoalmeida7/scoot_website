import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { NavLinksList } from "@/components/NavLinksList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Container />
      <footer className="bg-dim-grey text-center">
        <div className="bg-bottom-right bg-no-repeat py-12 mt-20" style={{backgroundImage: "url('/patterns/semi-circles.svg')"}}>
          <h3 className="text-snow font-bold text-3xl">
            Sign up and Scoot off today
          </h3>
          <div className="flex justify-center gap-4 mt-4">
            <Image
              src="/icons/app-store.svg"
              alt="app store icon"
              width={120}
              height={24}
            />
            <Image
              src="/icons/google-play.svg"
              alt="google play icon"
              width={120}
              height={24}
            />
          </div>
        </div>
        <div className="bg-dark-navy p-12">
          <div>
            <h3 className="text-snow font-bold text-4xl my-8">scoot</h3>
            <NavLinksList />
          </div>
          <div className="flex justify-center gap-4 mt-12">
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
    </>
  );
}
