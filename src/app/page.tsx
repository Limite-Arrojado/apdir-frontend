import FooterContacts, { IContacts } from "@/components/FooterContacts";
import Banner from "@/components/pages/home/Banner";
import Events from "@/components/pages/home/Events";
import Insol from "@/components/pages/home/Insol";
import News from "@/components/pages/home/News";
import { performRequest } from "@/utils/datocms";

export default async function Home() {
  const queryString = `
  {
    home {
      imagem {
        url
      }
      link,
      membroInsol,
      quantidadeDeMembros,
      quantiadeDeAssociaEs
      tituloDasNoticias,
      noticias {
        link,
        logo { 
          url
        }
        titulo,
        dataDePublicacao
      }
      tituloDosEventos,
      eventos {
        id,
        imageDeCapa {
          url
        }
        titulo,
        data,
        local,
        
      }
      contactos {
        tituloDoFormulario,
        textoRgpd,
        tituloContactos,
        tituloMorada,
        morada,
        tituloTelefone
        telefone
      }
    }
  }`;

  const { data } = await performRequest({ query: queryString });
  const {
    imagem,
    link,
    membroInsol,
    quantidadeDeMembros,
    quantiadeDeAssociaEs,
    tituloDasNoticias,
    noticias,
    tituloDosEventos,
    eventos,
    contactos,
  } = data.home;

  return (
    <>
      <Banner img={imagem} target={link} />
      <Insol
        text={membroInsol}
        qtyMembers={quantidadeDeMembros}
        qtyAssociation={quantiadeDeAssociaEs}
      />
      <News title={tituloDasNoticias} news={noticias} />
      <Events title={tituloDosEventos} events={eventos} />
      <FooterContacts data={contactos as IContacts[]} />
    </>
  );
}
