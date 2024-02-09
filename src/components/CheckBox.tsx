import clsx from "clsx";

const CheckBox = ({ name }: { name: string }) => {
  return <input name={name} className={clsx("mr-2")} type="checkbox" />;
};

export default CheckBox;
