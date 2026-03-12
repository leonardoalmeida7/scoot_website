interface MapAndCitiesProps {
  geo: {
    mapImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    cities: string[];
    position: {
      [city: string]: {
        top: string;
        left: string;
      }
    }
  };
}

export function MapAndCities({ geo }: MapAndCitiesProps) {
  return (
    <div className="flex flex-col gap-12 relative">
      <picture>
        <source media="(min-width: 1024px)" srcSet={geo.mapImage.desktop} type="image/png" />
        <source media="(min-width: 768px)" srcSet={geo.mapImage.tablet} type="image/png" />
        <img src={geo.mapImage.mobile} alt="Map" />
      </picture>
      <div className={`flex flex-col gap-4 md:absolute top-0 left-0 w-full h-full`}>
        {geo.cities.map((city, index) => (
          <div
            key={index}
            className="p-4 text-center text-2xl bg-(--color-light-yellow) md:bg-(--color-yellow) md:w-30 md:py-2 md:text-sm md:absolute"
            style={{ top: geo.position[city].top, left: geo.position[city].left }}
          >
            <span className="font-mono font-semibold text-dark-navy">
              {city}
            </span>
            <div className=" hidden md:block w-4 h-4 bg-(--color-yellow)  absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-45">{/* square */}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
