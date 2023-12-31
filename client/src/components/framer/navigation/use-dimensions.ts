import { useState, useLayoutEffect } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState<null | {}>({});

  useLayoutEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions]);

  return dimensions;
};

