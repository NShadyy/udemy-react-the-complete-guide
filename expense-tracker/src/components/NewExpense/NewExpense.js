import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsAddingNewExpense(false);
  };

  const addNewExpenseHandler = () => {
    setIsAddingNewExpense(true);
  };

  const cancelAddNewExpenseHandler = () => {
    setIsAddingNewExpense(false);
  };

  return (
    <div className="new-expense">
      {isAddingNewExpense && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancelAddNewExpense={cancelAddNewExpenseHandler}
        />
      )}
      {!isAddingNewExpense && (
        <button type="button" onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
