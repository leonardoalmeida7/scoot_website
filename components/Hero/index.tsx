import { ButtonDefault } from "@/ui/buttonDefault";

interface HeroProps {
    isOpenSidebar?: boolean;
}

export function Hero({isOpenSidebar}: HeroProps) {
  return (
    <div className={`h-[90dvh] flex flex-col items-center justify-center text-center bg-[url('/images/home-hero-mobile.jpg')] bg-cover bg-center bg-no-repeat ${isOpenSidebar && "brightness-25 z-0"} transition duration-400 md:bg-[url('/images/home-hero-desktop.jpg')] relative`}>
      <div className="w-[75%]">
        <h1 className="text-4xl font-bold text-snow">
          Scooter sharing made simple
        </h1>
        <p className="mt-4 mb-6 text-snow font-sans">
          Scoot takes the hassle out of urban mobility. Our bikes are placed in
          convenient locations in each of our cities. Use our app to locate the
          nearest bike, unlock it with a tap, and you're away!
        </p>
        <ButtonDefault>Get Scootin</ButtonDefault>
      </div>
      <img
        src="/patterns/right-arrow.svg"
        alt="arrow pointing right"
        className="absolute -left-[62%] bottom-8"
      />

    </div>
  );
}
