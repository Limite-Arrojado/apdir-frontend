import clsx from "clsx";
import Person from "./Person";

interface IAbout {
  photo: {
    url: string;
  };
  name: string;
  cargo: string;
  text: string;
}

const Content = (props: IAbout) => {
  const { text, photo, name, cargo } = props;

  return (
    <div
      className={clsx(
        "py-10 md:py-28",
        "flex flex-col justify-center items-center",
        "max-w-[1140px] mx-auto"
      )}
    >
      <div className={clsx("w-full px-10")}>
        <Person photo={photo} name={name} cargo={cargo} />
        <div className={clsx("mt-10 whitespace-pre-line text-[16px]")}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Content;
