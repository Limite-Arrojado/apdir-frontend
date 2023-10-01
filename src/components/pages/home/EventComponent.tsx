import clsx from "clsx";
import Image from "next/image";
import { IEvent } from "./Events";
import Link from "next/link";

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
      <Link href={event.target}>
        <div className={clsx("h-[185px]", "relative")}>
          <Image alt={event.title} src={event.img} fill />
        </div>
      </Link>
      <div className={clsx("flex flex-col justify-between", "p-[30px]")}>
        <div className={clsx("text-[20px] text-[#2e2f4f] font-semibold")}>
          <Link href={event.target}>{event.title}</Link>
        </div>

        <div className={clsx("mt-3", "text-[14px]")}>
          {event.date} | {event.local}
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
