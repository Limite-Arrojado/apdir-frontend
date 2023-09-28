import clsx from "clsx";
import Image from "next/image";

const Person = async () => {
  const { default: paulo } = await import("assets/paulo.jpeg");

  return (
    <div className={clsx("flex items-center", "p-[10px]")}>
      <Image
        alt="Paulo Valério"
        src={paulo}
        width={100}
        height={1000}
        style={{ borderRadius: 100 }}
      />
      <div className={"mx-6"}>
        <div className={clsx("text-[25px] md:text-[30px] font-semibold")}>
          Paulo Valério
        </div>
        <div>Diretor Executivo</div>
      </div>
    </div>
  );
};

export default Person;
