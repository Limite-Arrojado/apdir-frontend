"use client";
import clsx from "clsx";
import NormalInput from "./NormalInput";
import TextArea from "./TextArea";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useState } from "react";
import sendEmail from "@/utils/sendEmail";

export interface IContacts {
  tituloDoFormulario: string;
  textoRgpd: string;
  tituloContactos: string;
  tituloMorada: string;
  morada: string;
  tituloTelefone: string;
  telefone: string;
}

const FooterContacts = (props: { data: IContacts[] }) => {
  const {
    tituloDoFormulario,
    textoRgpd,
    tituloContactos,
    tituloMorada,
    morada,
    tituloTelefone,
    telefone,
  } = props.data[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    rgpdChecked: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const html = `
      <div>
        <h2>Novo contacto</h2>
        <p>Nome: ${formData.fullName}</p>
        <p>Email: ${formData.email}</p>
        <p>Mensagem: ${formData.message}</p>
      </div>
    `;

    await sendEmail({
      subject: "Novo formulário de contacto",
      html: html,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
            {tituloDoFormulario}
          </h2>
          <form onSubmit={handleSubmit}>
            <NormalInput
              name="fullName"
              required
              placeholder="Nome Completo..."
              fullWith
              onChange={handleChange}
            />
            <NormalInput
              name="email"
              type="email"
              required
              placeholder="Email..."
              fullWith
              onChange={handleChange}
            />
            <TextArea
              name="message"
              required
              onChange={handleChange}
              placeholder="Escreva a sua mensagem"
              fullWith
            />
            <div className="flex items-start">
              <div>
                <CheckBox name="rgpd" required onChange={handleChange} />
              </div>

              <div className="whitespace-pre-line text-justify">
                {textoRgpd}
              </div>
            </div>
            <Button type="submit" text={"Enviar"} />
          </form>
        </div>
        <div className={clsx("md:w-1/2", "pt-10 pl-12", "flex flex-col")}>
          <h2 className={clsx("text-[26px] font-semibold mb-[20px]")}>
            {tituloContactos}
          </h2>
          <div className={clsx("mb-[20px]")}>
            <h2 className={clsx("uppercase text-[14px] font-semibold")}>
              {tituloMorada}
            </h2>
            <div>{morada}</div>
          </div>
          <div className={clsx("mb-[20px]")}>
            <h2 className={clsx("uppercase text-[14px] font-semibold")}>
              {tituloTelefone}
            </h2>
            <div>{telefone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContacts;
