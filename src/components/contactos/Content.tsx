"use client";
import clsx from "clsx";
import NormalInput from "../NormalInput";
import TextArea from "../TextArea";
import Button from "../Button";
import CheckBox from "../CheckBox";
import { useState } from "react";
import sendEmail from "@/utils/sendEmail";

interface IContacts {
  tituloDoFormulario: string;
  textoRgpd: string;
  tituloContactos: string;
  tituloMorada: string;
  morada: string;
  tituloTelefone: string;
  telefone: string;
}

const Content = (props: IContacts) => {
  const {
    tituloDoFormulario,
    textoRgpd,
    tituloContactos,
    tituloMorada,
    morada,
    tituloTelefone,
    telefone,
  } = props;

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
    <>
      <div
        className={clsx(
          "z-[100]",
          "md:mt-[-20px]",
          "flex justify-center items-center",
          "bg-white",
          "w-full",
          "pb-36"
        )}
      >
        <div
          className={clsx(
            "flex flex-wrap",
            "max-w-[1140px] w-full",
            "bg-white"
          )}
        >
          <div
            className={clsx(
              "z-50",
              "md:w-1/2 bg-[#F7F7F9]",
              "px-[50px] py-10",
              "md:mt-[-70px]"
            )}
          >
            <h2
              className={clsx(
                "text-[#110728] text-[28px] md:text-[39px] font-semibold mb-5"
              )}
            >
              {tituloDoFormulario}
            </h2>
            <form onSubmit={handleSubmit}>
              {
                <NormalInput
                  required
                  name="fullName"
                  onChange={handleChange}
                  placeholder="Nome Completo..."
                  fullWith
                />
              }
              {
                <NormalInput
                  required
                  name="email"
                  onChange={handleChange}
                  placeholder="Email..."
                  fullWith
                />
              }
              {
                <TextArea
                  required
                  name="message"
                  onChange={handleChange}
                  placeholder="Escreva a sua mensagem"
                  fullWith
                />
              }
              <div className="flex items-start">
                <div>
                  <CheckBox
                    required
                    onChange={handleChange}
                    name="rgpdChecked"
                  />
                </div>
                <div className="whitespace-pre-line">{textoRgpd}</div>
              </div>
              {<Button type="submit" text={"Enviar"} />}
            </form>
          </div>
          <div className={clsx("md:w-1/2", "pt-20 pl-12", "flex flex-col")}>
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
    </>
  );
};

export default Content;
