interface ImageAndTitleProps {
  imageUrl: string;
  title: string;
}

export function ImageAndTitle({ imageUrl, title }: ImageAndTitleProps) {
  return (
    <div
      className=" h-[20dvh] flex items-center justify-center text-center bg-cover bg-center bg-no-repeat mb-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="text-4xl font-bold font-mono text-snow">{title}</h1>
    </div>
  );
}
