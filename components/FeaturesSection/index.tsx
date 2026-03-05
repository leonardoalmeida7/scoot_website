"use client";

import { FeatureStep } from "../FeatureStep";
import { useFetchData } from "@/hooks/useFetchData";

export function FeaturesSection() {
  const data = useFetchData();

  return (
    <section className="flex flex-col gap-16">
      {data?.home?.features?.featureStep?.map((feature, index) => (
        <FeatureStep
          key={index}
          title={feature.title}
          description={feature.description}
          imageSrc={feature.image.mobile}
          position={feature.position}
          invert={feature.invert}
        />
      ))}
    </section>
  );
}
