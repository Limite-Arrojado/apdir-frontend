import Link from "next/link";
import Image from "next/image";

const Logo = async () => {
  const { default: Logo } = await import("assets/logo.jpg");

  return (
    <Link href="/">
      <Image
        src={Logo}
        className="max-w-[357px] w-full	 sm:ml-[10px] sm:mr-0 lg:ml-0 lg:mr-[10px]"
        alt="APDIR"
      />
    </Link>
  );
};

export default Logo;
