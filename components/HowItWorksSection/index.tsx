import { HowItWorksStep } from "../HowItWorksStep";
import home from "@/content/home.json";

export function HowItWorksSection() {
  const { howItWorks } = home.features;

  return (
    <section className="flex flex-col gap-12 mx-auto mt-30 mb-20">
      {howItWorks?.map((step, index) => (
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
