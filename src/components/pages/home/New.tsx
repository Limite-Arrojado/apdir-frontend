"use client";
import clsx from "clsx";
import Image from "next/image";
import { INew } from "./News";
import Link from "next/link";
import converterData from "@/utils/dateConversion";

const New = (props: { data: INew }) => {
  const { data } = props;

  return (
    <div className={clsx("flex justify-start", "p-5 md:w-1/2")}>
      <div className={clsx("flex justify-center items-center")}>
        <Link href={data.link}>
          <Image width={80} height={80} alt={data.titulo} src={data.logo.url} />
        </Link>
      </div>

      <div className={clsx("pl-6")}>
        <Link href={data.link}>
          <div className={clsx("text-[18px] font-semibold")}>{data.titulo}</div>
        </Link>

        <div className={clsx("text-[#7a7a7a] text-[12px]")}>
          {converterData(data.dataDePublicacao)}
        </div>
      </div>
    </div>
  );
};

export default New;
