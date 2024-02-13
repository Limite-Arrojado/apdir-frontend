"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";
import converterData from "@/utils/dateConversion";
import ImageViewer from "./ImageViewer";
import parse from "html-react-parser";
import { MouseEventHandler, ReactNode, useState } from "react";
import { renderToString } from "react-dom/server";

interface IEvent {
  title: string;
  local: string;
  data: string;
  description: string;
  gallery: {
    url: string;
  }[];
}

const parseLinks = (string: string) => {
  const linkRegex =
    /(<a [^>]*href=['"]([^'"]+)['"][^>]*>.*?<\/a>)|((https?:\/\/[^\s<]+))/g;

  const parsedString = string.replace(linkRegex, (match, p1, p2, p3) => {
    if (p1) {
      return p1;
    }

    const isInIframe = /<iframe[^>]+src=['"]([^'"]+)['"][^>]*>/.test(string);

    if (isInIframe) {
      return match;
    }

    return `<a href="${p3}" target="_blank">${p3}</a>`;
  });

  return parsedString;
};

const Content = (props: IEvent) => {
  const { title, local, data, description, gallery } = props;

  const galleryItems = gallery.map((i) => i.url);

  const finalText = parseLinks(description);

  //const stringRepresentation = finalText.join("");

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
          className={clsx("max-w-[1140px] w-full mx-[auto]", "flex flex-col")}
        >
          <h2
            className={clsx(
              "text-[#4CAEA0] uppercase text-[48px] font-semibold"
            )}
          >
            {title}
          </h2>
          <div className={clsx("mt-5")}>
            <div>
              <div className={clsx("flex justify-between")}>
                <div>
                  <h3 className={clsx("uppercase text-[36px]")}>{local}</h3>
                  <h3 className={clsx("uppercase text-[36px]")}>
                    {converterData(data)}
                  </h3>
                  <p className={clsx("text-[18px]", "mb-3")}>{title}</p>
                  <div className={clsx("whitespace-pre-line text-justify")}>
                    {parse(finalText)}
                  </div>
                </div>

                <div
                  className="cursor-pointer"
                  onClick={() => handleImageClick(0)}
                >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
