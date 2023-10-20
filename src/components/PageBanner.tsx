import clsx from "clsx";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface IPageBanner {
  target?: string;
  image?: StaticImageData | string;
  title?: string;
  intermediateTitle?: string;
  subtitle?: string;
  overlay?: boolean;
  home?: boolean;
}

const PageBanner = (props: IPageBanner) => {
  const { target, image, title, intermediateTitle, subtitle, overlay, home } =
    props;

  return (
    <Link href={target ? target : "#"}>
      <div
        className={clsx(
          "relative z-0",
          "w-full h-[150px]",
          "md:h-[350px]",
          "flex flex-col justify-center items-center",
          "bg-[#f5efe0]"
        )}
      >
        {!!image && (
          <Image
            alt={title ? title : ""}
            src={image}
            fill
            style={{
              objectFit: "cover",
              objectPosition: !home ? "left 10%" : undefined,
            }}
          />
        )}
        {!!title && (
          <div
            className={clsx(
              "z-50",
              "text-[20px] md:text-[75px] text-white font-semibold uppercase"
            )}
          >
            {title}
          </div>
        )}
        {!!intermediateTitle && (
          <div
            className={clsx(
              "z-50",
              "text-[15px] md:text-[28px] text-white  uppercase"
            )}
          >
            {intermediateTitle}
          </div>
        )}
        {!!subtitle && (
          <div
            className={clsx(
              "z-50",
              "text-[10px] md:text-[16px] text-white tracking-[1.8px]"
            )}
          >
            {subtitle}
          </div>
        )}
        {!!overlay && (
          <div
            className={clsx(
              "bg-[#2D2E4F] opacity-[66%]",
              "absolute w-full h-full"
            )}
          ></div>
        )}
      </div>
    </Link>
  );
};

export default PageBanner;
