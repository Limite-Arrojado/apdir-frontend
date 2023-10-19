import clsx from "clsx";
import Image from "next/image";
import GalleryItem from "./GalleryItem";

export interface IGallery {
  items: string[];
  handleImageClick: (i: number) => void;
}

const Gallery = (props: IGallery) => {
  const { items, handleImageClick } = props;

  return (
    <>
      <div className={clsx("flex flex-wrap gap-4")}>
        {items.map((item, index) => {
          return (
            <div onClick={() => handleImageClick(index)} key={index}>
              <GalleryItem alt={item} url={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
