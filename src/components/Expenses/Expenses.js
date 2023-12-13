import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onYearChange={yearChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items = {filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;