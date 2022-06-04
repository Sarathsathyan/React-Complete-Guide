
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import React, { useState, useEffect } from 'react'
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) }
];
// Arrow functions

const App = ()=>{

  const [expenses, setExpenses] = useState(DummyExpenses)

  
  const addExpenseHandler = (expense) =>{
    setExpenses(previousExpense =>{
      return [expense, ...previousExpense]
    })
    console.log(expense)
    expenses.push(expense)
    console.log(expenses)

  }
  return (
  
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
