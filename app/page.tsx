import { Container } from "@/components/Container";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MainHero } from "@/components/MainHero";
import { home } from "@/content";

export default function Home() {
  const { featureStep } = home.features;
  return (
    <>
      <MainHero />
      <Container>
        <HowItWorksSection />
        <FeaturesSection featureStep={featureStep}/>
      </Container>
    </>
  );
}
