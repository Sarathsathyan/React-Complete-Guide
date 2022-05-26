
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'
function Expenses(props){
    return(
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} edate={props.items[0].date}
            />
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} edate={props.items[1].date}
            />
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} edate={props.items[2].date}
            />
         
        </Card>
    )

}
export default Expenses;