import PageBanner from "@/components/PageBanner";
import Content from "@/components/signup/Content";
import { performRequest } from "@/utils/datocms";

const signup = async () => {
  const { default: banner } = await import("assets/successful-partnership.jpg");

  const queryString = `
  {
    inscricao {
      titulo,
      subTitulo,
      imagemDeCapa {
        url
      },
      descricaoDoFormulario,
      primeiroNome,
      ultimoNome,
      dataDeNascimento,
      profissao,
      nDeIdentificacao,
      nDeContribuinte,
      telefone,
      email,
      morada,
      rgpd,
      botaoSubmeter
  }
}
`;

  const { data } = await performRequest({ query: queryString });

  const {
    titulo,
    subTitulo,
    imagemDeCapa,
    descricaoDoFormulario,
    primeiroNome,
    ultimoNome,
    dataDeNascimento,
    profissao,
    nDeIdentificacao,
    nDeContribuinte,
    telefone,
    email,
    morada,
    rgpd,
    botaoSubmeter,
  } = data.inscricao ?? {};

  return (
    <>
      <PageBanner
        image={imagemDeCapa?.url || banner}
        title={titulo}
        subtitle={subTitulo}
        overlay
      />
      <Content
        description={descricaoDoFormulario}
        firstName={primeiroNome}
        lastName={ultimoNome}
        birthDate={dataDeNascimento}
        job={profissao}
        nIdentificacao={nDeIdentificacao}
        nContribuinte={nDeContribuinte}
        phone={telefone}
        email={email}
        address={morada}
        rgpdText={rgpd}
        buttonLabel={botaoSubmeter}
      />
    </>
  );
};

export default signup;
