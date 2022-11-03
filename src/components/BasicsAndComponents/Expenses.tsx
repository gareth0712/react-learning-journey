import { FC } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

type ExpensesProp = {
  expenses: Expense[];
};

const Expenses: FC<ExpensesProp> = ({
  expenses,
}: ExpensesProp): JSX.Element => {
  const expenseItems = expenses.map((expense) => (
    // In react, Lower case are built-in html elements whereas custom React components must be in upper case to tell React that this is a React component
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));
  // JSX is still JS code; Use className because Class is a reserved word in JS
  return <div className="expenses">{expenseItems}</div>;
};

export default Expenses;
