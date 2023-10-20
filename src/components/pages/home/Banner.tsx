import PageBanner from "@/components/PageBanner";
import clsx from "clsx";
import Link from "next/link";

const Banner = (props: { img: { url: string }; target: string }) => {
  const { img, target } = props;

  return (
    <>
      <PageBanner image={img.url} target={target} home />
    </>
  );
};

export default Banner;
