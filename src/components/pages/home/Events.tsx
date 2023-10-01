import clsx from "clsx";
import EventComponent from "./EventComponent";

export interface IEvent {
  img: string;
  title: string;
  date: string;
  local: string;
  target: string;
}

const Events = () => {
  const events: IEvent[] = Array(6).fill({
    img: "https://apdir-assoc.pt/wp-content/uploads/2021/02/IV-congresso-nacional-de-insolvencia-e-recuperacao.jpg",
    title: "IV Congresso nacional de Insolvência e recuperação",
    date: "26 Março 2021",
    local: "Online",
    target:
      "https://apdir-assoc.pt/eventos/iv-congresso-nacional-de-insolvencia-e-recuperacao/",
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
            Últimos Eventos
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
          {events.map((event: IEvent) => {
            return <EventComponent data={event} key={event.target} />;
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
