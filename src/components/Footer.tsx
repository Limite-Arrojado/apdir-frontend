import clsx from "clsx";
import Link from "next/link";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      className={clsx(
        "bg-white bg-footer-pattern bg-left-top bg-[78%_auto]",
        "py-[40px]",
        "flex flex-col justify-center items-center"
      )}
    >
      <div className={clsx("flex")}>
        <div
          className={clsx(
            "text-white hover:text-primary",
            "my-[10px] mx-[5px]"
          )}
        >
          <Link href="https://www.facebook.com/APDIRportugal/">
            <BiLogoFacebook size={26} />
          </Link>
        </div>
        <div
          className={clsx(
            "text-white hover:text-primary",
            "my-[10px] mx-[5px]"
          )}
        >
          <Link href="https://www.linkedin.com/company/apdir-associa%C3%A7%C3%A3o-portuguesa-de-direito-da-insolv%C3%AAncia-e-recupera%C3%A7%C3%A3o/">
            <BiLogoLinkedin size={26} />
          </Link>
        </div>
      </div>
      <div className={clsx("text-[#90919F] text-[15px]")}>
        © Copyright APDIR
      </div>
    </div>
  );
};

export default Footer;
