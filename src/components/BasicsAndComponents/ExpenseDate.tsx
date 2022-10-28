import { FC } from "react";

const ExpenseItem: FC<{ date: Date }> = ({
  date,
}: {
  date: Date;
}): JSX.Element => {
  const month: string = date.toLocaleString("en-US", { month: "long" });
  const day: string = date.toLocaleString("en-US", { day: "2-digit" });
  const year: number = date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseItem;
