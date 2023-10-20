"use client";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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

  const [members, setMembers] = useState(membersInitial);
  const [associations, setAssociations] = useState(associationsInitial);

  useEffect(() => {
    const interval = setInterval(() => {
      if (members < membersFinal) setMembers(members + 1);
    }, 5);

    return () => clearInterval(interval);
  }, [members, membersFinal]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (associations < associationsFinal) setAssociations(associations + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [associations, associationsFinal]);

  const options = {
    style: "decimal",
    useGrouping: true,
  };

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
          <div className={clsx("text-[30px]")}>
            {members.toLocaleString("en-US", options)}+
          </div>
          <div className={clsx("uppercase font-semibold text-[16px]")}>
            Membros
          </div>
        </div>
        <div className={clsx("text-center", "p-[10px]")}>
          <div className={clsx("text-[30px]")}>
            {associations.toLocaleString("en-US", options)}+
          </div>
          <div className={clsx("uppercase font-semibold text-[16px]")}>
            Associações
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsolCounter;
