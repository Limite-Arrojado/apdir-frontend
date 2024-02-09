import clsx from "clsx";

const Button = (props: { text: string; type: string }) => {
  const { text } = props;
  return (
    <button
      type="submit"
      className={clsx(
        "w-full mt-5 py-4",
        "bg-primary hover:bg-secondary text-white uppercase font-semibold",
        "ease duration-[.3s]"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
