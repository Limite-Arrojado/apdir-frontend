import clsx from "clsx";
import NormalInput from "../NormalInput";
import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import Button from "../Button";

const Content = () => {
  const SignUpText = `A APDIR é uma associação sem fins lucrativos, destinada a fomentar a participação de profissionais que trabalham na área da insolvência e recuperação, em especial, ligados ao mundo do direito e da gestão, tais como advogados, economistas, magistrados, contabilistas, administradores judiciais e professores universitários.
    
    Tem como missão:
    
    Contribuir para o networking entre os seus associados;
    Organizar eventos de carácter formativo;
    Promover projetos de investigação científica em parceria com outras entidades;
    Promover a edição de publicações;
    Pugnar por uma maior participação no processo legislativo por parte dos profissionais na área de insolvência.

    A APDIR é uma associação membro da INSOL International (INSOL) – a única associação mundial de profissionais de insolvência e recuperação – e todos os associados da APDIR gozam de automático reconhecimento como membros desta organização internacional.`;

  return (
    <div className={clsx("w-full", "flex justify-center", "md:pb-[100px]")}>
      <div
        className={clsx(
          "max-w-[650px] w-full md:mt-[-55px] p-[50px] z-50",
          "bg-[#F7F7F9]"
        )}
      >
        <div className={clsx("whitespace-pre-line", "text-[14px]")}>
          {SignUpText}
        </div>
        <form className={clsx("mt-6")}>
          <NormalInput label="Primeiro Nome" fullWith />
          <NormalInput label="Último Nome" fullWith />
          <NormalInput type="date" label="Data de Nascimento" fullWith />
          <NormalInput label="Profissão" fullWith />
          <NormalInput label="Nº de Contribuinte" fullWith />
          <NormalInput label="Telefone" fullWith />
          <NormalInput label="Email" fullWith />
          <TextArea label="Morada" fullWith />
          <div className={"mb-8"}>
            {<CheckBox />}
            <span>
              Autorizo a recolha e tratamento dos dados pessoais supra, com
              vista a assegurar o normal funcionamento da APDIR na sua relação
              com os Associados, designadamente para efeitos de divulgação de
              iniciativas no respectivo âmbito de actividade;
            </span>
            <p className={"mt-4"}>
              * A APDIR assegura ao signatário o direito de, a todo o tempo,
              requerer a actualização dos dados ora facultados e bem assim a sua
              remoção.
            </p>
          </div>
          <Button text="Submeter" />
        </form>
      </div>
    </div>
  );
};

export default Content;
