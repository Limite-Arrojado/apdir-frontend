import PageBanner from "@/components/PageBanner";
import Content from "@/components/sobre-nos/Content";

export default async function about() {
  const { default: banner } = await import("assets/capa-sobre-nos.jpg");

  return (
    <>
      <PageBanner
        image={banner}
        title="Sobre nós"
        subtitle="CONHEÇA A NOSSA ASSOCIAÇÃO"
      />
      <Content />
    </>
  );
}
