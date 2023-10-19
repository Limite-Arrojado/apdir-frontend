import clsx from "clsx";

export default async function contacts() {
  return (
    <div className={clsx("flex justify-center items-center", "h-full py-64")}>
      <h3 className={clsx("text-black text-[50px] font-semibold")}>
        Brevemente
      </h3>
    </div>
  );
}
