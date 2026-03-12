import { useEffect, useState } from "react";

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export function useResponsiveImage(imageUrl: ResponsiveImage) {
  const [src, setSrc] = useState(imageUrl.mobile);

  useEffect(() => {
    function updateSrc() {
      if (window.matchMedia("(min-width:1024px)").matches) {
        setSrc(imageUrl.desktop);
      } else if (window.matchMedia("(min-width:768px)").matches) {
        setSrc(imageUrl.tablet);
      } else {
        setSrc(imageUrl.mobile);
      }
    }
    updateSrc();
    window.addEventListener("resize", updateSrc);
    return () => window.removeEventListener("resize", updateSrc);
  }, [imageUrl]);

  return src;
}
