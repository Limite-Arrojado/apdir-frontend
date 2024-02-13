import clsx from "clsx";
import EventComponent from "./EventComponent";

export interface IEvent {
  id: string;
  imageDeCapa: {
    url: string;
  };
  titulo: string;
  data: string;
  local: string;
}

const Events = (props: { title: string; events: IEvent[] }) => {
  const { title, events } = props;

  const orderedEvents = events.sort((a, b) => {
    return new Date(a.data).getTime() + new Date(b.data).getTime();
  });

  return (
    <div
      className={clsx(
        "relative",
        "py-32 w-full",
        "flex flex-col justify-center items-center"
      )}
    >
      <div
        className={clsx(
          "z-50",
          "flex flex-col justify-center items-center",
          "w-full"
        )}
      >
        <div className={clsx("text-center")}>
          <h2 className={clsx("text-5xl font-semibold text-center")}>
            {title}
          </h2>
        </div>
        {/* Last Events */}
        <div
          className={clsx(
            "flex flex-wrap justify-between items-center",
            "max-w-[1140px] w-full p-2.5",
            "mt-6"
          )}
        >
          {orderedEvents &&
            orderedEvents.map((event: IEvent) => {
              return <EventComponent data={event} key={event.id} />;
            })}
        </div>
      </div>

      <div
        className={clsx(
          "absolute w-full h-full z-0",
          "bg-mesh-background bg-right-bottom bg-no-repeat bg-[577px_auto] opacity-25"
        )}
      ></div>
    </div>
  );
};

export default Events;
