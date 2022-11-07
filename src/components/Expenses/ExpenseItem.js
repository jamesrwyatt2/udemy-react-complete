import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  cosnt [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    console.log('Clicked!');
    setTitle('Updated!');
  };

  return (
    <div className="expense-item">
        <div>
            <ExpenseDate date={props.date}/>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <button onClick={clickHandler}>Change title</button>
        </div>
    </div>
  );
}
export default ExpenseItem