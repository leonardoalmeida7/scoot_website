import { HowItWorksStep } from "../HowItWorksStep";

export function HowItWorksSection() {
  return (
    <section className="container flex flex-col gap-12 mx-auto mt-30 mb-20">
      <HowItWorksStep
        iconSrc="/icons/locate.svg"
        title="Locate with app"
        description="Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away."
      />
      <HowItWorksStep
        iconSrc="/icons/scooter.svg"
        title="Pick your scooter"
        description="We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
      />
      <HowItWorksStep
        iconSrc="/icons/ride.svg"
        title="Enjoy the ride"
        description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
      />
    </section>
  );
}
