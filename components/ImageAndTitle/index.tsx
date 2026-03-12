"use client";
import {
  useResponsiveImage,
  ResponsiveImage,
} from "@/hooks/useResponsiveImage";

interface ImageAndTitleProps {
  imageUrl: ResponsiveImage;
  title: string;
}

export function ImageAndTitle({ imageUrl, title }: ImageAndTitleProps) {
  const bg = useResponsiveImage(imageUrl);

  return (
    <div
      className="h-[20dvh] md:h-[25dvh] flex items-center justify-center md:justify-between mb-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="text-4xl md:text-5xl font-bold font-mono text-snow md:ms-20">
        {title}
      </h1>
      <img src="/patterns/white-circles.svg" alt="white circles"  className="hidden md:block -mr-8"/>
    </div>
  );
}
