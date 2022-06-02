import { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


function ExpenseItem(props){
    
    const [title, setTitle] = useState(props.title)
   
    const clickHandle =()=>{
        setTitle('New updated title')
    }
    console.log(title)
    return (
    <div className='expense-item'>
        <ExpenseDate edate={props.edate}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandle}>Change Title</button>
    </div>
    )   
}

export default ExpenseItem;