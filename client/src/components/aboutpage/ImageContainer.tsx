import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  backgroundImages: string[];
}

export const ImageContainer = ({ backgroundImages }: Props) => {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    backgroundImages[0]
  );
  const fadeDuration = 2500; // duration of the fade effect in milliseconds
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadingOut(true);
      // update the background images after the fadeDuration has passed
      setTimeout(() => {
        const nextIndex =
          (backgroundImages.indexOf(currentBackgroundImage) + 1) %
          backgroundImages.length;
        setCurrentBackgroundImage(backgroundImages[nextIndex]);
        setFadingOut(false);
      }, fadeDuration);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBackgroundImage, backgroundImages]);

  return (
    <>
      <Image
        alt={currentBackgroundImage}
        src={currentBackgroundImage}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={300}
        height={300}
        style={{
          opacity: fadingOut ? 0 : 1,
          transition: `opacity 2000ms ease-in-out`,
        }}
        className="w-full h-full rounded-xl"
      />
    </>
  );
};

export default ImageContainer;
