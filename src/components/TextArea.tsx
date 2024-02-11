import clsx from "clsx";
import { INormalInput } from "./NormalInput";

const TextArea = (props: INormalInput) => {
  const {
    placeholder,
    defaultValue,
    fullWith,
    label,
    name,
    onChange,
    required,
  } = props;

  return (
    <>
      <label>{label}</label>
      <textarea
        required={!!required}
        onChange={onChange as any}
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

export default TextArea;
