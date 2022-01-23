import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2021");
  const filteredYearExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  const addYear = (year) => {
    setEnteredYear(year);
    console.log("Expenses data");
    console.log(enteredYear);
  };

  let expensesContent = <p>No expenses found.</p>;
  if (filteredYearExpenses.length > 0) {
    expensesContent = filteredYearExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onAddYear={addYear} enteredYear={enteredYear} />
        { expensesContent }
      </Card>
    </div>
  );
}

export default Expenses;
