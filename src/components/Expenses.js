
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
function Expenses(props){
    return(
        <Card className="expenses">
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} edate={props.item[0].date}
            />
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} edate={props.item[1].date}
            />
        </Card>
    )

}
export default Expenses;