"use client";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export interface IGalleryItem {
  alt: string;
  url: string;
}

const GalleryItem = (props: IGalleryItem) => {
  const { alt, url } = props;

  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={clsx("w-[177px] h-[118px] relative")}
      >
        <Image alt={alt} src={url} objectFit="cover" fill />
        <div
          className={clsx(
            "absolute w-full h-full",
            "bg-[rgba(0,0,0,0.5)] opacity-0 hover:opacity-100 transition-all	",
            "cursor-pointer"
          )}
        ></div>
      </div>
    </>
  );
};

export default GalleryItem;
