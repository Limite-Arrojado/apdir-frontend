import PageBanner from "@/components/PageBanner";
import Content from "@/components/contactos/Content";
import FooterMap from "@/components/FooterMap";
import { performRequest } from "@/utils/datocms";

export default async function contacts() {
  const { default: oldPhone } = await import("assets/old-phone.jpg");

  const queryStringBanner = `
  {
    contacto {
      imagemDeCapa {
        url,
      },
      titulo
    }
  }`;

  const queryStringForm = `
  {
    home {
      contactos {
        tituloDoFormulario,
        textoRgpd,
        tituloContactos,
        tituloMorada,
        morada,
        tituloTelefone,
        telefone
      }
    }
  }`;

  const { data: dataForm } = await performRequest({ query: queryStringForm });
  const { data: dataBanner } = await performRequest({
    query: queryStringBanner,
  });

  const {
    tituloDoFormulario,
    textoRgpd,
    tituloContactos,
    tituloMorada,
    morada,
    tituloTelefone,
    telefone,
  } = dataForm.home.contactos[0];

  const { imagemDeCapa, titulo } = dataBanner.contacto ?? {};

  return (
    <>
      <PageBanner
        image={imagemDeCapa?.url || oldPhone}
        title={titulo}
        overlay
      />
      <Content
        tituloDoFormulario={tituloDoFormulario}
        textoRgpd={textoRgpd}
        tituloContactos={tituloContactos}
        tituloMorada={tituloMorada}
        morada={morada}
        tituloTelefone={tituloTelefone}
        telefone={telefone}
      />
      <FooterMap />
    </>
  );
}
