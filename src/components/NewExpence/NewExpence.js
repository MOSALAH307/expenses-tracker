import React, { useState } from "react";
import './NewExpence.css';
import ExpenceForm from "./ExpenceForm";

const NewExpence = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const addExpenseHandler = () => {
    setIsEditing(true);
  }
  const cancelHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={addExpenseHandler}>Add Expense</button>}
      {isEditing && <ExpenceForm cancel={cancelHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  );
}

export default NewExpence;