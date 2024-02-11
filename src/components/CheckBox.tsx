import clsx from "clsx";

const CheckBox = ({
  name,
  onChange,
  required,
}: {
  required?: boolean;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <input
      required={!!required}
      onChange={onChange}
      name={name}
      className={clsx("mr-2")}
      type="checkbox"
    />
  );
};

export default CheckBox;
