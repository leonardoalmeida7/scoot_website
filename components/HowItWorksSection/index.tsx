"use client";

import { HowItWorksStep } from "../HowItWorksStep";
import { useFetchData } from "@/hooks/useFetchData";

export function HowItWorksSection() {
  const data = useFetchData();

  return (
    <section className="container flex flex-col gap-12 mx-auto mt-30 mb-20">
      {data && data?.home?.features?.howItWorks?.map((step, index) => (
        <HowItWorksStep
          key={index}
          iconSrc={step.icon}
          title={step.title}
          description={step.description}
        />
      ))}
    </section>
  );
}
