import Menu from "@/app/menu";
import Logo from "./logo";
import clsx from "clsx";
import { ComponentProps } from "react";
import Link from "next/link";

const Header = () => {
  const menuOptions: ComponentProps<typeof Menu>["menuOptions"] = [
    {
      children: "Sobre Nós",
      href: "/sobre-nos",
    },
    {
      children: "Inscrição",
      href: "/inscricoes",
    },
    {
      children: "Contactos",
      href: "/contactos",
    },
  ];

  return (
    <div className="w-full bg-white sm:pl-0 lg:pl-[50px] flex flex-row justify-between">
      <div className="p-[10px] flex flex-col lg:flex-row items-start">
        {/* Logo */}
        <div className="border-solid sm:border-l-2 lg:border-l-0 sm:border-r-0 lg:border-r-2 border-[#A9A9A9]">
          <Logo />
        </div>

        <Menu menuOptions={menuOptions} />
      </div>

      {/* Button */}
      <div>
        <Link
          href="/brevemente"
          className={clsx(
            "bg-primary hover:bg-secondary",
            "ease duration-[.3s]",
            "h-full flex items-center justify-center",
            "text-[15px] font-semibold text-white text-center	uppercase",
            "px-10 py-5"
          )}
        >
          Área Reservada
        </Link>
      </div>
    </div>
  );
};

export default Header;
