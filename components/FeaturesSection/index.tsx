import { FeatureStep } from "../FeatureStep";

interface FeaturesSectionProps {
  featureStep: {
    title: string;
    description: string;
    image: string;
    position: string;
    invertX?: boolean;
    invertY?: boolean;
  }[];
}

export function FeaturesSection({ featureStep }: FeaturesSectionProps) {

  return (
    <section className="flex flex-col gap-16">
      {featureStep?.map(({title, description, image, position, invertX, invertY}, index) => (
        <FeatureStep
          key={index}
          title={title}
          description={description}
          imageSrc={image}
          position={position}
          invertX={invertX}
          invertY={invertY}
        />
      ))}
    </section>
  );
}
