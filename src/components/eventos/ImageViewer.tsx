import { Dialog } from "@headlessui/react";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

interface IImageViewer {
  items: string[];
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedItem: number;
}

const ImageViewer = (props: IImageViewer) => {
  const { items, open, setIsOpen, selectedItem } = props;

  const [selectedImage, setSelectedImage] = useState(selectedItem);

  const handleClickRight = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedImage === items.length - 1) {
      setSelectedImage(0);
      return;
    }
    setSelectedImage(selectedImage + 1);
  };

  const handleClickLeft = (e: React.MouseEvent<HTMLDivElement>) => {
    if (selectedImage === 0) {
      setSelectedImage(items.length - 1);
      return;
    }
    setSelectedImage(selectedImage - 1);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex justify-between w-screen items-center p-4 bg-black/90">
          <div
            onClick={() => setIsOpen(false)}
            className={clsx(
              "absolute inset-0 text-[30px] w-fit h-fit p-4 text-white cursor-pointer"
            )}
          >
            <AiOutlineClose />
          </div>
          <div
            onClick={handleClickLeft}
            className={clsx("text-white text-[40px]", "p-5", "cursor-pointer")}
          >
            <SlArrowLeft />
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className={clsx("md:max-w-[1200px] w-full h-full relative")}
          >
            <Image alt="" src={items[selectedImage]} fill objectFit="contain" />
          </div>
          <div
            onClick={handleClickRight}
            className={clsx("text-white text-[40px]", "p-5", "cursor-pointer")}
          >
            <SlArrowRight />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ImageViewer;
