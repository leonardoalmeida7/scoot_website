import { FeatureStep } from "@/components/FeatureStep";
import { ImageAndTitle } from "@/components/ImageAndTitle";

export default function About() {
  return (
    <>
      <ImageAndTitle imageUrl="/images/about-hero-mobile.jpg" title="About" />
      <FeatureStep
        title="Mobility for the digital era"
        imageSrc="/images/near-you.jpg"
      />
    </>
  );
}
