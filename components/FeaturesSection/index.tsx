import { FeatureStep } from "../FeatureStep";

interface FeaturesSectionProps {
  featureStep: {
    title: string;
    description: string;
    image: string;
    position: string;
    invertX?: boolean;
    invertY?: boolean;
    buttonText?: string;
  }[];
}

export function FeaturesSection({ featureStep }: FeaturesSectionProps) {

  return (
    <section className="flex flex-col gap-16">
      {featureStep?.map(({title, description, image, position, invertX, invertY, buttonText}, index) => (
        <FeatureStep
          key={index}
          title={title}
          description={description}
          imageSrc={image}
          position={position}
          invertX={invertX}
          invertY={invertY}
          buttonText={buttonText}
        />
      ))}
    </section>
  );
}
