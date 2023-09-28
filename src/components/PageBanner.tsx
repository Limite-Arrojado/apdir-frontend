import clsx from "clsx";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface IPageBanner {
  target?: string;
  image: StaticImageData;
  title?: string;
  subtitle?: string;
}

const PageBanner = (props: IPageBanner) => {
  const { target, image, title, subtitle } = props;

  return (
    <Link href={target ? target : "/"}>
      <div
        className={clsx(
          "relative",
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
      </div>
    </Link>
  );
};

export default PageBanner;
