import { FeaturesSection } from "../FeaturesSection";
import { HowItWorksSection } from "../HowItWorksSection";

export function Container() {
  return (
    <main className="container mx-auto">
      <HowItWorksSection />
      <FeaturesSection />
    </main>
  );
}
