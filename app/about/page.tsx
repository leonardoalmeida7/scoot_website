import { Container } from "@/components/Container";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImageAndTitle } from "@/components/ImageAndTitle";
import { OurValuesSection } from "@/components/OurValuesSection";
import { FAQsSection } from "@/components/FAQsSection";

import { about } from "@/content";

export default function About() {
  const { features, ourValues, FAQs } = about;

  return (
    <>
      <ImageAndTitle imageUrl={about.image} title={about.title} />
      <Container>
        <FeaturesSection featureStep={features} />
        <OurValuesSection ourValues={ourValues} />
        <FAQsSection howItWorks={FAQs.howItWorks} safeDriving={FAQs.safeDriving} />
      </Container>
    </>
  );
}
