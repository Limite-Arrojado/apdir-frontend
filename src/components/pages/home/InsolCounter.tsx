"use client";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ReactNode, RefObject, useEffect, useState } from "react";
import CountUp from "react-countup";

const InsolCounter = (props: {
  insol: StaticImageData;
  qtyMembers: number;
  qtyAssociations: number;
}) => {
  const { qtyMembers, qtyAssociations } = props;

  const membersInitial = 10000;
  const associationsInitial = 10;
  const membersFinal = qtyMembers;
  const associationsFinal = qtyAssociations;

  return (
    <div
      className={clsx(
        "md:w-[20%] w-full",
        "bg-[#1C2544]",
        "flex flex-col justify-center",
        "py-7"
      )}
    >
      <div className={clsx("flex justify-center")}>
        <Image src={props.insol} alt="insol" />
      </div>
      <div
        className={clsx(
          "flex justify-center flex-wrap items-center",
          "text-white",
          "mt-[20px]"
        )}
      >
        <div className={clsx("text-center", "p-[10px]")}>
          <CountUp
            start={membersInitial}
            end={membersFinal}
            delay={0}
            duration={4}
            suffix="+"
          >
            {({ countUpRef }) => (
              <div
                ref={countUpRef as RefObject<HTMLDivElement>}
                className={clsx("text-[30px]")}
              >
                {membersInitial}
                {/*members.toLocaleString("en-US", options)*/}+
              </div>
            )}
          </CountUp>

          <div className={clsx("uppercase font-semibold text-[16px]")}>
            Membros
          </div>
        </div>
        <div className={clsx("text-center", "p-[10px]")}>
          <CountUp
            start={associationsInitial}
            end={associationsFinal}
            delay={0}
            duration={4}
            suffix="+"
          >
            {({ countUpRef }) => (
              <div
                ref={countUpRef as RefObject<HTMLDivElement>}
                className={clsx("text-[30px]")}
              >
                {associationsInitial}
                {/*members.toLocaleString("en-US", options)*/}+
              </div>
            )}
          </CountUp>
          <div className={clsx("uppercase font-semibold text-[16px]")}>
            Associações
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsolCounter;
