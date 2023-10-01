import clsx from "clsx";
import InsolCounter from "./InsolCounter";

const Insol = async () => {
  const text =
    "A APDIR é uma associação membro da INSOL International. Todos os associados ficam automaticamente membros desta organização.";

  const { default: insol } = await import("assets/insol.png");

  return (
    <div className={clsx("flex flex-wrap", "w-full")}>
      <div
        className={clsx(
          "md:w-[65%] w-full",
          "bg-[#F7F7F9] bg-quote-marks bg-no-repeat bg-[40vw_16vh] bg-[length:160px_auto]",
          "relative"
        )}
      >
        <div
          className={clsx(
            "pt-[50px] pb-[70px] md:pl-[100px] md:pr-0 px-[50px]",
            "max-w-[500px]",
            "text-[18px] text-black font-semibold",
            "z-50"
          )}
        >
          {text}
        </div>
        <div
          className={clsx(
            "bg-[#F7F7F9] opacity-50",
            "absolute top-0 left-0",
            "w-full h-full",
            "z-40"
          )}
        ></div>
      </div>
      <div
        className={clsx(
          "md:w-[15%] w-full h-[150px] md:h-auto",
          "bg-world bg-cover bg-center bg-no-repeat",
          "relative"
        )}
      >
        <div
          className={clsx(
            "bg-[#4CAEA0] opacity-[0.66]",
            "w-full h-full",
            "absolute"
          )}
        ></div>
      </div>
      <InsolCounter insol={insol} />
    </div>
  );
};

export default Insol;
