import { ButtonDefault } from "@/ui/buttonDefault";
import Image from "next/image";

interface FeatureStepProps {
  title: string;
  description: string;
  imageSrc: string;
  position?: string;
  invertX?: boolean;
  invertY?: boolean;
  buttonText?: string;
}

export function FeatureStep({
  title,
  description,
  imageSrc,
  position,
  invertX,
  invertY,
  buttonText,
}: FeatureStepProps) {
  return (
    <div className="flex flex-col gap-7 items-center text-center relative max-w-85 mx-auto">
      <Image
        src={imageSrc}
        alt={title}
        width={300}
        height={300}
        className="rounded-full"
      />

      <Image
        src="/patterns/right-arrow.svg"
        alt="left downward arrow"
        className={`absolute  ${position} max-w-110 ${invertX ? "scale-x-[-1]" : ""} ${invertY ? "scale-y-[-1]" : ""}`}
        width={500}
        height={200}
      />
      <h2 className="font-bold text-3xl text-center">{title}</h2>
      <p className="text-dim-grey">
        {description}
      </p>
      {buttonText && <ButtonDefault>{buttonText}</ButtonDefault>}
    </div>
  );
}
