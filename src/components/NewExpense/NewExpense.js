import React, {useState} from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setShowNewExpenseForm(false);
    };
    const showNewExpenseFormHandler = () => {
        setShowNewExpenseForm(true);
    }
    const cancelNewExpenseFormHandler = () => {
        setShowNewExpenseForm(false);
    }

    if (!showNewExpenseForm) {
        
        return (
        <div className="new-expense">
        <button onClick={showNewExpenseFormHandler}>Add New Expense</button>
        </div>
        )
    }

    if (showNewExpenseForm) {
        return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelNewExpenseForm={cancelNewExpenseFormHandler}/>
        </div>)
    }





};

export default NewExpense;