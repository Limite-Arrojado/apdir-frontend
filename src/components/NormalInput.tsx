import clsx from "clsx";

export interface INormalInput {
  placeholder?: string;
  defaultValue?: string;
  fullWith?: boolean;
  name?: string;
  label?: string;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NormalInput = (props: INormalInput) => {
  const {
    placeholder,
    defaultValue,
    fullWith,
    label,
    name,
    type,
    onChange,
    required,
  } = props;

  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input
        required={!!required}
        onChange={onChange}
        type={type}
        name={name}
        className={clsx(
          "bg-white appearance-none outline-0	",
          "text-[14px] text-[#7a7a7a]",
          {
            "w-full": fullWith,
          },
          "py-4 px-[1rem] mb-3 mt-2",
          "focus:border-[1px] focus:border-solid"
        )}
        placeholder={placeholder}
        value={defaultValue}
      />
    </>
  );
};

export default NormalInput;
