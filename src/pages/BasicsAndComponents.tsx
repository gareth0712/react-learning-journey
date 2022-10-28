import { FC } from "react";
import ExpenseItem from "../components/BasicsAndComponents/ExpenseItem";

const BasicsAndComponents: FC = (): JSX.Element => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const expenseItems = expenses.map((expense) => (
    // In react, Lower case are built-in html elements whereas custom React components must be in upper case to tell React that this is a React component
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
    />
  ));
  // A React component consists of HTML, JS, and CSS
  // For each return statement / JSX code snippets, there must be only one root element
  // What is JSX: Javascript XML, mostly mean that Javascript and HTML (HTML in the end is XML) combine together, just like the code below
  return (
    <>
      <h1>The BasicsAndComponents page</h1>
      {expenseItems}
    </>
  );
};

export default BasicsAndComponents;
