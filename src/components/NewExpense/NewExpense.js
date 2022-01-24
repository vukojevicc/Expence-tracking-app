import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [addExpense, setAddExpense] = useState(false);

  const clickHandler = () => {
    addExpense ? setAddExpense(false) : setAddExpense(true);
  };

  const addExpenseBoolean = (addExpenseStatus) => {
    setAddExpense(addExpenseStatus);
  };

  let content = <button onClick={clickHandler}>Add new expense</button>;

  if (addExpense) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        addExpense={addExpense}
        addExpenseBoolean={addExpenseBoolean}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
