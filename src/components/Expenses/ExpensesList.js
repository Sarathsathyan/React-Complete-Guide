
import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = (props)=>{
    if (props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expenses Found</h2>
    }

        return (
            <div className="expenses_list">
                {props.items.length > 0 && props.items.map( expense =>{
                return(
                    <ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount} edate={expense.date}
                    />
                    )
                 })
                }
            </div>
            )
    }
export default ExpensesList;