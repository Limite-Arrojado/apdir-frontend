import Banner from "@/components/pages/home/Banner";
import Insol from "@/components/pages/home/Insol";
import News from "@/components/pages/home/News";

export default async function Home() {
  return (
    <>
      <Banner />
      <Insol />
      <News />
    </>
  );
}
