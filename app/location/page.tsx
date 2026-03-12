import { ImageAndTitle } from "@/components/ImageAndTitle";
import { location } from "@/content";
import { Container } from "@/components/Container";
import {ButtonDefault } from "@/ui/buttonDefault";
import { MapAndCities } from "@/components/MapAndCities";

export default function Location() {
  const { title, geo, image } = location;

  return (
    <>
      <ImageAndTitle title={title} imageUrl={image} />
      <Container>
        <MapAndCities geo={geo} />
        <div className="flex flex-col items-center gap-4 mt-12 text-center px-6 md:px-12">
          <h1 className="text-dark-navy text-3xl md:text-5xl font-bold">Your City Not Listed?</h1>
          <p className="text-dim-grey">
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <ButtonDefault>Message Us</ButtonDefault>
        </div>
      </Container>
    </>
  );
}
