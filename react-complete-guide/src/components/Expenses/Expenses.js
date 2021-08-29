import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearChangeHandler = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };

  const filteredExpensesList = props.expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();

    return filterYear === expenseYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpensesList} />
      <ExpensesList expenses={filteredExpensesList} />
    </Card>
  );
};

export default Expenses;
