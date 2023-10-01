import clsx from "clsx";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface IPageBanner {
  target?: string;
  image: StaticImageData;
  title?: string;
  subtitle?: string;
  overlay?: boolean;
}

const PageBanner = (props: IPageBanner) => {
  const { target, image, title, subtitle, overlay } = props;

  return (
    <Link href={target ? target : "#"}>
      <div
        className={clsx(
          "relative z-0",
          "w-full h-[150px] md:h-[350px]",
          "flex flex-col justify-center items-center"
        )}
      >
        <Image
          alt={title ? title : ""}
          src={image}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "left 10%",
          }}
        />
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
