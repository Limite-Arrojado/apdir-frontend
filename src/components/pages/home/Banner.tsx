import clsx from "clsx";
import Link from "next/link";

const Banner = () => {
  return (
    <Link href={"/evento"}>
      <div
        className={clsx(
          "w-full h-[200px] md:h-[350px]",
          "bg-banner-image bg-contain bg-right-top bg-no-repeat bg-[#FCBA80]"
        )}
      ></div>
    </Link>
  );
};

export default Banner;
