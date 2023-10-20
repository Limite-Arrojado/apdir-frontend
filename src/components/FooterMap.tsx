import clsx from "clsx";

const FooterMap = () => {
  return (
    <div
      className={clsx(
        "mt-[150px]",
        "flex justify-center items-center",
        "bg-white bg-footer-pattern bg-left-bottom bg-[78%_auto] ",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "flex flex-col justify-center items-center",
          "max-w-[1140px] w-full",
          "mt-12 md:mt-[-150px]"
        )}
      >
        <span
          className={clsx("uppercase text-[39px]", "text-white md:text-black")}
        >
          Onde Estamos
        </span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d24895.499798288063!2d-9.146484000000001!3d38.742197!3m2!1i1024!2i768!4f13.1!2m1!1sAvenida%20da%20Rep%C3%BAblica%2C%20n%C2%BA%2050%2C%202%C2%BAandar%2C%201050-196%20Lisboa!5e0!3m2!1spt-PT!2sus!4v1696174799865!5m2!1spt-PT!2sus"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          className={clsx("w-full mt-[50px]")}
        ></iframe>
      </div>
    </div>
  );
};

export default FooterMap;
