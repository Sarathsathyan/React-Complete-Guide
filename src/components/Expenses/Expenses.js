
import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler =(selectedYear)=>{
        setFilteredYear(selectedYear)
        console.log(filteredYear)
    }   

    // Filtering the expenses
    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
        
    )

}
export default Expenses;