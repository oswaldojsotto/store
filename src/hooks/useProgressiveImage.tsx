import { useState, useEffect } from "react";

type ProgressiveImgProps = {
  placeholderSrc: string;
  src: string;
  alt: string;
};

const ProgressiveImg = ({
  placeholderSrc,
  src,
  alt,
  ...props
}: ProgressiveImgProps) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={alt || ""}
      className="item-photo"
    />
  );
};
export default ProgressiveImg;
