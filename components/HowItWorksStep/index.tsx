import Image from "next/image";

interface HowItWorksStepProps {
  iconSrc: string;
  title: string;
  description: string;
}

export function HowItWorksStep({
  iconSrc,
  title,
  description,
}: HowItWorksStepProps) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-80 mx-auto text-center">
      <Image src={iconSrc} alt={title} width={50} height={50} />
      <h2 className="font-bold text-xl">{title}</h2>
      <p className=" text-dim-grey">{description}</p>
    </div>
  );
}
