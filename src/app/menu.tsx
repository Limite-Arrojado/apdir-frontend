"use client";
import { ComponentProps, useState } from "react";
import Link from "next/link";

import { HiMenu, HiX } from "react-icons/hi";
import clsx from "clsx";

const Menu = ({
  menuOptions,
}: {
  menuOptions: ComponentProps<typeof Link>[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={clsx(
          "relative lg:hidden",
          "text-[#7a7a7a]",
          "flex justify-center items-center",
          "pr-[10px]"
        )}
      >
        <button onClick={handleClick}>
          {isOpen ? <HiX size={"2em"} /> : <HiMenu size={"2em"} />}
        </button>

        {isOpen && (
          <div className="absolute bg-white bottom-[-128px] z-50 left-0 ml-[-10px] shadow-[0px_12px_13px_0px_#0000005e]">
            <ul className="w-[50vw]">
              {menuOptions.map((option) => (
                <li
                  key={option.target}
                  className="text-[13px] uppercase font-semibold tracking-[1px] py-2.5	px-5"
                >
                  <Link {...option} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ul className="lg:flex flex-row hidden">
        {menuOptions.map((option) => {
          return (
            <li
              key={option.href.toString()}
              className="flex justify-center	items-center"
            >
              <Link
                {...option}
                className="text-[#7a7a7a] hover:text-[#059695] text-[13px] uppercase font-semibold tracking-[1px] p-5"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Menu;
