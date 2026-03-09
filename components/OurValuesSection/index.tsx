interface OurValuesSectionProps {
  ourValues: {
    title: string;
    description: string;
    image: string;
  }[];
}

export function OurValuesSection({ ourValues }: OurValuesSectionProps) {
  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center mt-16 mb-8">Our Values</h2>
      <div className="flex flex-col gap-12 ">
        {ourValues.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-center gap-8"
          >
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full rounded-full bg-cover"
              />
              <div className="bg-yellow text-dark-navy text-2xl w-23 p-7 mx-auto text-center rounded-full font-bold absolute -bottom-10 left-[50%] translate-x-[-50%] font-mono ">
                {"0" + (index + 1)}
              </div>
            </div>
            <div className="w-3/4 mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-dark-navy font-mono">
                {title}
              </h3>
              <p className="text-dim-grey text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
