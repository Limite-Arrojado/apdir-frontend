import PageBanner from "@/components/PageBanner";
import Content from "@/components/signup/Content";

const signup = async () => {
  const { default: banner } = await import("assets/successful-partnership.jpg");

  return (
    <>
      <PageBanner
        image={banner}
        title="Inscrição"
        subtitle="CONHEÇA A NOSSA ASSOCIAÇÃO"
        overlay
      />
      <Content />
    </>
  );
};

export default signup;
