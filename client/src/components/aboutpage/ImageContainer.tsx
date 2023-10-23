import { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  backgroundImages: string[];
  changing: boolean;
}

export const ImageContainer = ({ backgroundImages, changing }: Props) => {
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
      {changing ? (
        <Image
          alt={currentBackgroundImage}
          src={currentBackgroundImage}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
          width={250}
          height={250}
          style={{
            opacity: fadingOut ? 0 : 1,
            transition: `opacity 2000ms ease-in-out`,
          }}
          className="w-full h-full rounded-xl"
        />
      ) : (
        <Image
          alt={backgroundImages[0]}
          src={backgroundImages[0]}
          sizes="(max-width: 1200px) 50vw, 33vw"
          width={250}
          height={250}
          className="w-full w-full rounded-xl"
        />
      )}
    </>
  );
};

export default ImageContainer;
