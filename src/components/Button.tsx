import clsx from "clsx";

const Button = (props: { text: string }) => {
  const { text } = props;
  return (
    <button
      className={clsx(
        "w-full mt-5 py-4",
        "bg-primary hover:bg-secondary text-white uppercase font-semibold"
      )}
    >
      {text}
    </button>
  );
};

export default Button;
