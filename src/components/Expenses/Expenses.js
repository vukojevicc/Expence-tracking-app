import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2022");
  const filteredYearExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  const addYear = (year) => {
    setEnteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onAddYear={addYear} enteredYear={enteredYear} />
        <ExpensesChart expenses={filteredYearExpenses} />
        <ExpensesList data={filteredYearExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
