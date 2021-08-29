import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearChangeHandler = (newFilterYear) => {
    setFilterYear(newFilterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        filterYear={filterYear}
        onFilterYearChange={filterYearChangeHandler}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
