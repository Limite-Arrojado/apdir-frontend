import clsx from "clsx";
import Image from "next/image";

interface IAboutPerson {
  photo: {
    url: string;
  };
  name: string;
  cargo: string;
}

const Person = async (props: IAboutPerson) => {
  const { default: paulo } = await import("assets/paulo.jpeg");

  const { photo, name, cargo } = props;

  return (
    <div className={clsx("flex items-center", "p-[10px]")}>
      <Image
        alt={name}
        src={photo && photo.url ? photo.url : paulo}
        width={100}
        height={1000}
        style={{ borderRadius: 100 }}
      />
      <div className={"mx-6"}>
        <div className={clsx("text-[25px] md:text-[30px] font-semibold")}>
          {name}
        </div>
        <div>{cargo}</div>
      </div>
    </div>
  );
};

export default Person;
