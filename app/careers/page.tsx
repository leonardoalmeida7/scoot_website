import { CareerCard } from "@/components/CareerCard";
import { Container } from "@/components/Container";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ImageAndTitle } from "@/components/ImageAndTitle";
import { OurValuesSection } from "@/components/OurValuesSection";
import { careers } from "@/content";

export default function Careers() {
  const { title, image, features, whyJoinUs, jobs } = careers;
  return (
    <>
      <ImageAndTitle imageUrl={image} title={title} />
      <Container>
        <FeaturesSection featureStep={features} />
        <OurValuesSection ourValues={whyJoinUs} title="Why Join Us?" />
        <section className="flex flex-col gap-5">
          {jobs.map(({ job, location }, index) => (
            <CareerCard key={index} title={job} location={location} />
          ))}
        </section>
      </Container>
    </>
  );
}
