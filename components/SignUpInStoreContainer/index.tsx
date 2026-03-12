import Image from "next/image";

export function SignUpInStoreContainer() {
  return (
    <div
      className="bg-bottom-right bg-no-repeat py-16 mt-20"
      style={{ backgroundImage: "url('/patterns/semi-circles.svg')" }}
    >
      <div className="max-w-80 md:max-w-120 mx-auto">
        <h3 className="text-snow font-bold text-3xl md:text-5xl font-mono mb-10">
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
    </div>
  );
}
