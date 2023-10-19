import PageBanner from "@/components/PageBanner";
import Content from "@/components/sobre-nos/Content";
import { performRequest } from "@/utils/datocms";

export default async function about() {
  const { default: banner } = await import("assets/capa-sobre-nos.jpg");

  const queryString = `
  {
    sobre {
      imagemDeCapa {
        url
      },
      titulo,
      subTitulo,
      fotografia {
        url
      },
      nome,
      cargo,
      texto
    }
  }
  `;

  const { data } = await performRequest({ query: queryString });

  const { imagemDeCapa, titulo, subtitulo, fotografia, nome, cargo, texto } =
    data.sobre;

  return (
    <>
      <PageBanner
        image={imagemDeCapa && imagemDeCapa.url ? imagemDeCapa.url : banner}
        title={titulo}
        subtitle={subtitulo}
        overlay
      />
      <Content photo={fotografia} name={nome} cargo={cargo} text={texto} />
    </>
  );
}
