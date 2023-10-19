"use client";
import clsx from "clsx";
import New from "./New";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export interface INew {
  logo: {
    url: string;
  };
  titulo: string;
  link: string;
  dataDePublicacao: string;
}

const News = (props: { title: string; news: INew[] }) => {
  const { title, news } = props;

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
            {title}
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
            return <New data={item} key={item.link} />;
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
