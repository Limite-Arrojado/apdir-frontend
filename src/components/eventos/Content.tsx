"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";
import converterData from "@/utils/dateConversion";
import ImageViewer from "./ImageViewer";
import { MouseEventHandler, useState } from "react";

interface IEvent {
  title: string;
  local: string;
  data: string;
  description: string;
  gallery: {
    url: string;
  }[];
}

const Content = (props: IEvent) => {
  const { title, local, data, description, gallery } = props;

  const galleryItems = gallery.map((i) => i.url);

  const parts = description.split(" ");
  const finalText = parts.map((part: string, index: number) => {
    if (part.startsWith("http")) {
      return (
        <Link
          className={clsx("text-[18px] text-[#cd2653]", "mb-3")}
          key={index}
          href={part}
        >
          {part}
        </Link>
      );
    } else {
      return part + " ";
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleImageClick = (i: number) => {
    setSelectedItem(i);
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && (
        <ImageViewer
          items={galleryItems}
          open={isOpen}
          setIsOpen={setIsOpen}
          selectedItem={selectedItem}
        />
      )}
      <div className={clsx("py-20", "flex justify-center items-center")}>
        <div
          className={clsx(
            "max-w-[1140px] w-full mx-[auto]",
            "flex flex-wrap-reverse"
          )}
        >
          <div className={clsx("max-w-[750px]", "p-[30px]")}>
            <div>
              <h2
                className={clsx(
                  "text-[#4CAEA0] uppercase text-[48px] font-semibold"
                )}
              >
                {local}
              </h2>
              <h2 className={clsx("uppercase text-[48px]")}>
                {converterData(data)}
              </h2>
              <p className={clsx("text-[18px]", "mb-3")}>{title}</p>
              <p className={clsx("text-[18px]", "mb-3")}>26/03/2021 às 10H</p>
              {finalText}
              {/*<Link
              className={clsx("text-[18px] text-[#cd2653]", "mb-3")}
              href="https://eco.sapo.pt/topico/iv-congresso-nacional-da-insolvencia-e-recuperacao/"
            >
              https://eco.sapo.pt/topico/iv-congresso-nacional-da-insolvencia-e-recuperacao/
              </Link>*/}
            </div>
            {galleryItems.length > 1 && (
              <div className={clsx("mt-16 w-full")}>
                <h3 className={clsx("uppercase")}>Galeria</h3>
                <div className={clsx("w-full mt-3")}>
                  <Gallery
                    items={galleryItems}
                    handleImageClick={handleImageClick}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="cursor-pointer" onClick={() => handleImageClick(0)}>
            {galleryItems.length > 0 && (
              <Image
                alt={title}
                className={clsx("p-[30px]")}
                width={350}
                height={100}
                src={galleryItems[0]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
