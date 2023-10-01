"use client";
import clsx from "clsx";
import New from "./New";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface INew {
  img: string;
  title: string;
  target: string;
  date: string;
}

const News = () => {
  const news: INew[] = Array(10).fill({
    img: "https://apdir-assoc.pt/wp-content/uploads/2020/04/explicador-observador.jpg",
    title: 'Associação Têxtil. "Dielmar não representa setor"',
    target:
      "https://observador.pt/programas/explicador/associacao-textil-dielmar-nao-representa-sector/",
    date: "04/07/2021",
  });

  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      className={clsx(
        "relative",
        "py-32 w-full",
        "flex flex-col justify-center items-center"
      )}
    >
      <div
        className={clsx("z-50", "flex flex-col justify-center items-center")}
      >
        <div className={clsx("text-center")}>
          <h2 className={clsx("text-5xl font-semibold text-center")}>
            Notícias
          </h2>
        </div>
        {/* NEWS */}
        <div
          className={clsx(
            "flex flex-wrap",
            "max-w-[1140px] w-full p-2.5",
            "mt-6"
          )}
        >
          {news.slice(0, showAll ? news.length : 4).map((item) => {
            return <New data={item} key={item.target} />;
          })}
        </div>

        {news.length > 4 && (
          <button
            onClick={handleClick}
            className={clsx(
              "flex justify-center items-center",
              "py-5 px-10",
              "bg-[#4CAEA0] hover:bg-primary rounded-md",
              "text-white font-semibold",
              "transition-all ease-linear"
            )}
          >
            {showAll ? (
              <>
                <span className={clsx("mr-[20px]")}>Fechar</span>
                <MdKeyboardArrowUp size={30} />
              </>
            ) : (
              <>
                <span className={clsx("mr-[20px]")}>Ver todas as notícias</span>{" "}
                <MdKeyboardArrowDown size={30} />
              </>
            )}
          </button>
        )}
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

export default News;
