import { useEffect, useState } from "react";

export const useActualWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => {
      const updatedWidth = window.innerWidth;

      setWidth(updatedWidth);
    };

    window.addEventListener("resize", updateWidth, { passive: true });

    updateWidth();

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width;
};
