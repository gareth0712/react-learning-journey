import { FC } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

type ExpenseItemProps = {
  title: string;
  amount: number;
  date: Date;
};

const ExpenseItem: FC<ExpenseItemProps> = ({
  title,
  amount,
  date,
}: ExpenseItemProps): JSX.Element => {
  // JSX is still JS code; Use className because Class is a reserved word in JS
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
