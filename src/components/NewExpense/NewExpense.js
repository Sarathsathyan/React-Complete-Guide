import React from "react";
import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
  const  [isEditing, setEditing] = useState(false)

  const saveExpenseDataHandler =(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id : Math.random()
    }
    props.onAddExpense(expenseData);
  }

  const selectEditing = () =>{
    setEditing(true)
  }
  const cancelEditing = () =>{
    setEditing(false)
  }
  return (

    <div className="new-expense">
      {!isEditing && <button onClick={selectEditing}>Add New Expense</button>}

      {isEditing && 
        <ExpenseForm onCancelEdit={cancelEditing} onSaveExpenseData={saveExpenseDataHandler}/>}
    </div>
  )
}

export default NewExpense;