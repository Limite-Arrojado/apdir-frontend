import clsx from "clsx";
import NormalInput from "./NormalInput";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import Button from "./Button";

const FooterContacts = () => {
  return (
    <div
      className={clsx(
        "mt-[150px]",
        "flex justify-center items-center",
        "bg-white bg-footer-pattern bg-left-bottom bg-[78%_auto] ",
        "w-full"
      )}
    >
      <div
        className={clsx("flex flex-wrap", "max-w-[1140px] w-full", "bg-white")}
      >
        <div
          className={clsx(
            "md:w-1/2 bg-[#F7F7F9]",
            "px-[50px] py-10",
            "mt-[-70px]"
          )}
        >
          <h2 className={clsx("text-[#110728] text-[39px] font-semibold mb-5")}>
            Deixe-nos uma mensagem
          </h2>
          <NormalInput placeholder="Nome Completo..." fullWith />
          <NormalInput placeholder="Email..." fullWith />
          <TextArea placeholder="Escreva a sua mensagem" fullWith />
          <div>
            <CheckBox />
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
          <Button text={"Enviar"} />
        </div>
        <div className={clsx("md:w-1/2", "pt-10 pl-12", "flex flex-col")}>
          <h2 className={clsx("text-[26px] font-semibold mb-[20px]")}>
            Contactos
          </h2>
          <div className={clsx("mb-[20px]")}>
            <h2 className={clsx("uppercase text-[14px] font-semibold")}>
              Morada
            </h2>
            <div>Avenida da República, nº 50, 2º andar, 1050-196 Lisboa</div>
          </div>
          <div className={clsx("mb-[20px]")}>
            <h2 className={clsx("uppercase text-[14px] font-semibold")}>
              Telefone
            </h2>
            <div>+351 211 388 141</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
