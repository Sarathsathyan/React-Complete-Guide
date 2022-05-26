import './ExpenseDate.css'
function ExpenseDate(props){
    console.log(props.date)
    const month = props.edate.toLocaleString('en-US',{month:'long'})
    const day = props.edate.toLocaleString('en-US',{day:'2-digit'})
    const year = props.edate.getFullYear()

    return(
        <div className="expense-date">
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>

    )
}
export default ExpenseDate;