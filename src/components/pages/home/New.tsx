"use client";
import clsx from "clsx";
import Image from "next/image";
import { INew } from "./News";
import Link from "next/link";

const New = (props: { data: INew }) => {
  const { data } = props;

  return (
    <div className={clsx("flex justify-start", "p-5 md:w-1/2")}>
      <div className={clsx("flex justify-center items-center")}>
        <Link href={data.target}>
          <Image width={80} height={80} alt={data.title} src={data.img} />
        </Link>
      </div>

      <div className={clsx("pl-6")}>
        <Link href={data.target}>
          <div className={clsx("text-[18px] font-semibold")}>{data.title}</div>
        </Link>

        <div className={clsx("text-[#7a7a7a] text-[12px]")}>{data.date}</div>
      </div>
    </div>
  );
};

export default New;
