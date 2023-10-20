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
        <form className={clsx("mt-6")}>
          <NormalInput label={firstName} fullWith />
          <NormalInput label={lastName} fullWith />
          <NormalInput type="date" label={birthDate} fullWith />
          <NormalInput label={job} fullWith />
          <NormalInput label={nIdentificacao} fullWith />
          <NormalInput label={nContribuinte} fullWith />
          <NormalInput label={phone} fullWith />
          <NormalInput label={email} fullWith />
          <TextArea label={address} fullWith />
          <div className={"mb-8 flex items-start"}>
            <div>{<CheckBox />}</div>

            <div className="whitespace-pre-line">{rgpdText}</div>
          </div>
          <Button text={buttonLabel} />
        </form>
      </div>
    </div>
  );
};

export default Content;
