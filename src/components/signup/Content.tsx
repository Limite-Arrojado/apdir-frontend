import clsx from "clsx";
import NormalInput from "../NormalInput";
import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import Button from "../Button";

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

  const submitForm = async (formData: FormData) => {
    "use server";
    let html: string = "";
    formData.forEach((field, key) => {
      if (key.toString().startsWith("$")) return;
      html += `<p>${key}: ${field}</p>`;
    });
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
        <form className={clsx("mt-6")} action={submitForm}>
          <NormalInput name="firstName" label={firstName} fullWith />
          <NormalInput name="lastName" label={lastName} fullWith />
          <NormalInput name="date" type="date" label={birthDate} fullWith />
          <NormalInput name="job" label={job} fullWith />
          <NormalInput name="nIdentificacao" label={nIdentificacao} fullWith />
          <NormalInput name="nContribuinte" label={nContribuinte} fullWith />
          <NormalInput name="phone" label={phone} fullWith />
          <NormalInput name="email" label={email} fullWith />
          <TextArea name="address" label={address} fullWith />
          <div className={"mb-8 flex items-start"}>
            <div>{<CheckBox name="rgpd" />}</div>

            <div className="whitespace-pre-line">{rgpdText}</div>
          </div>
          <Button text={buttonLabel} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Content;
