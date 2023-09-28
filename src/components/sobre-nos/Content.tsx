import clsx from "clsx";
import Person from "./Person";

const Content = () => {
  const text = `A APDIR é uma associação sem fins lucrativos, fundada em 2018, que se revê na ideia de que o direito da insolvência e recuperação não é um mero instrumento de gestão de crise, mas antes um vetor estratégico para o desenvolvimento e capacidade de atração de qualquer economia num mundo global.

    A sua fundação, em 2018, teve como principal propósito colmatar aquilo que considerámos ser uma lacuna em Portugal: a inexistência de uma organização transversal onde os diversos profissionais que trabalham na área da insolvência e recuperação se pudessem encontrar, sobretudo para partilhar experiência e conhecimento.
    
    É, assim, a primeira organização do género em Portugal, vocacionada para a organização de conferências, a promoção de projetos de investigação, a participação no processo legislativo ou a edição de publicações. A APDIR é, ainda, membro da INSOL International, a única associação mundial de profissionais de insolvência e recuperação.
    
    A crise que se abateu sobre Portugal a partir de 2008 e o impacto do programa de assistência financeira internacional, já em 2012, alteraram completamente um paradigma de trabalho em que a insolvência – fosse para juristas ou profissionais de outras áreas – não era prevalecente, cingindo-se, na maioria dos casos, à elaboração de reclamações de créditos ou à participação esporádica em assembleias de credores.
    
    Na verdade, a experiência da última crise revelou-nos que o tema entrou pelos escritórios adentro e veio para ficar. Não se trata de um fatalismo – trata-se de um fenómeno normal e recorrente das atividades económicas, que mesmo o maior otimismo sobre a economia de um determinado país não poderá ignorar.
    
    O mais importante, a nosso ver, é que sejam criadas as condições para que o aprofundamento desta área de conhecimento não esteja sempre dependente do sobressalto de novas crises e possa ser construído, paulatinamente, aproveitando a experiência passada e em diálogo com as melhores práticas internacionais.
    
    É esta, em primeira linha, a missão da APDIR. E, contamos, no caminho, com o contributo de todos os profissionais que desejem trilhá-lo ao nosso lado.`;

  return (
    <div
      className={clsx(
        "py-10 md:py-28",
        "flex flex-col justify-center items-center",
        "max-w-[1140px] mx-auto"
      )}
    >
      <div className={clsx("w-full px-10")}>
        <Person />
        <div className={clsx("mt-10 whitespace-pre-line text-[16px]")}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default Content;
