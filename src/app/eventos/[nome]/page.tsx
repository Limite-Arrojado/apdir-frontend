import PageBanner from "@/components/PageBanner";
import Content from "@/components/eventos/Content";
import { performRequest } from "@/utils/datocms";

const eventos = async ({ params }: { params: { nome: string } }) => {
  const queryString = `{
    evento(filter: { id: { eq: "${params.nome}" } }) {
      titulo
    	local,
    	data,
    	titulo,
    	descricao
    	galeria {
        url
      }
    }
}`;

  const { data: res } = await performRequest({ query: queryString });

  const { titulo, local, data, descricao, galeria } = res.evento ?? {};

  return (
    <>
      <Content
        title={titulo}
        local={local}
        data={data}
        description={descricao}
        gallery={galeria}
      />
    </>
  );
};

export default eventos;
