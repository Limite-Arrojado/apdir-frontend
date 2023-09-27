import clsx from "clsx";

export interface INormalInput {
  placeholder?: string;
  defaultValue?: string;
  fullWith?: boolean;
}

const NormalInput = (props: INormalInput) => {
  const { placeholder, defaultValue, fullWith } = props;

  return (
    <input
      className={clsx(
        "bg-white appearance-none outline-0	",
        "text-[14px] text-[#7a7a7a]",
        {
          "w-full": fullWith,
        },
        "py-4 px-[1rem] mb-3",
        "focus:border-[1px] focus:border-solid"
      )}
      placeholder={placeholder}
      value={defaultValue}
    />
  );
};

export default NormalInput;
