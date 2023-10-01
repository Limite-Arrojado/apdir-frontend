import PageBanner from "@/components/PageBanner";
import Content from "@/components/contactos/Content";
import FooterMap from "@/components/FooterMap";

export default async function contacts() {
  const { default: oldPhone } = await import("assets/old-phone.jpg");

  return (
    <>
      <PageBanner image={oldPhone} title="Contactos" overlay />
      <Content />
      <FooterMap />
    </>
  );
}
