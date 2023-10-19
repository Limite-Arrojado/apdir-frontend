import clsx from "clsx";
import Image from "next/image";
import { IEvent } from "./Events";
import Link from "next/link";
import converterData from "@/utils/dateConversion";

const EventComponent = (props: { data: IEvent }) => {
  const { data: event } = props;

  return (
    <div
      className={clsx(
        "flex flex-col",
        "md:w-[calc(40%)] md:min-w-[523px]",
        "mx-auto mt-3 md:my-[13px]",
        "bg-[#F4F4F9]"
      )}
    >
      <Link href={"eventos/" + event.id}>
        <div className={clsx("h-[185px]", "relative")}>
          <Image
            alt={event.titulo}
            src={event.imageDeCapa.url}
            fill
            objectFit="cover"
            objectPosition="left top"
          />
        </div>
      </Link>
      <div className={clsx("flex flex-col justify-between", "p-[30px]")}>
        <div className={clsx("text-[20px] text-[#2e2f4f] font-semibold")}>
          <Link href={event.id}>{event.titulo}</Link>
        </div>

        <div className={clsx("mt-3", "text-[14px]")}>
          {converterData(event.data)} | {event.local}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
