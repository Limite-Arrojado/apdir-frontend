"use client";
import clsx from "clsx";
import NormalInput from "../NormalInput";
import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import Button from "../Button";
import sendEmail from "@/utils/sendEmail";
import { useState } from "react";

interface ISignup {
  description: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  job: string;
  nIdentificacao: string;
  nContribuinte: string;
  phone: string;
  email: string;
  address: string;
  rgpdText: string;
  buttonLabel: string;
}

interface IFormSubmitedField {
  name: string;
  value: string;
}

const Content = (props: ISignup) => {
  const {
    description,
    firstName,
    lastName,
    birthDate,
    job,
    nIdentificacao,
    nContribuinte,
    phone,
    email,
    address,
    rgpdText,
    buttonLabel,
  } = props;

  const [emailSentStatus, setEmailSentStatus] = useState<
    "success" | "error" | undefined
  >();

  const submitForm = async (formData: FormData) => {
    let html: string = "";
    formData.forEach((field, key) => {
      if (key.toString().startsWith("$")) return;
      html += `<p>${key}: ${field}</p>`;
    });

    await sendEmail({
      subject: "Novo formulário de inscrição",
      html: html,
    })
      .then(() => setEmailSentStatus("success"))
      .catch(() => setEmailSentStatus("error"));
  };

  return (
    <div className={clsx("w-full", "flex justify-center", "md:pb-[100px]")}>
      <div
        className={clsx(
          "max-w-[650px] w-full md:mt-[-55px] p-[50px] z-50",
          "bg-[#F7F7F9]"
        )}
      >
        <div className={clsx("whitespace-pre-line", "text-[14px]")}>
          {description}
        </div>
        {/* Formulário comentado - SendGrid não está ativo
        <form className={clsx("mt-6")} action={submitForm}>
          <NormalInput name="firstName" required label={firstName} fullWith />
          <NormalInput name="lastName" required label={lastName} fullWith />
          <NormalInput
            name="date"
            type="date"
            required
            label={birthDate}
            fullWith
          />
          <NormalInput name="job" required label={job} fullWith />
          <NormalInput
            name="nIdentificacao"
            required
            label={nIdentificacao}
            fullWith
          />
          <NormalInput
            name="nContribuinte"
            required
            label={nContribuinte}
            fullWith
          />
          <NormalInput name="phone" required label={phone} fullWith />
          <NormalInput name="email" required label={email} fullWith />
          <TextArea name="address" required label={address} fullWith />
          <div className={"mb-8 flex items-start"}>
            <div>{<CheckBox name="rgpd" required />}</div>

            <div className="whitespace-pre-line">{rgpdText}</div>
          </div>
          <Button text={buttonLabel} type="submit" />
          {emailSentStatus === "success" && (
            <div
              className={clsx(
                "w-full text-center mt-3 text-[#70C0BB] font-semibold"
              )}
            >
              Email enviado com sucesso
            </div>
          )}
          {emailSentStatus === "error" && (
            <div
              className={clsx(
                "w-full text-center mt-3 text-[#FF0000] font-semibold"
              )}
            >
              Ocorreu um erro ao enviar o email, tente mais tarde
            </div>
          )}
        </form>
        */}

        <div className={clsx("mt-6", "text-center")}>
          <a
            href={`mailto:geral@apdir-assoc.pt?subject=Nova inscrição&body=Nome:%0D%0AData de Nascimento:%0D%0AProfissão:%0D%0ANº de Identificação:%0D%0ANº de Contribuinte:%0D%0ATelefone:%0D%0AE-mail:%0D%0AMorada:`}
            className={clsx(
              "inline-block",
              "bg-[#70C0BB]",
              "text-white",
              "px-8",
              "py-3",
              "rounded",
              "font-semibold",
              "hover:bg-[#5da8a3]",
              "transition-colors"
            )}
          >
            Quero inscrever-me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
