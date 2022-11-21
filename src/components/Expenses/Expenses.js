import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

const Expenses = (props) => {
const[selectedFilterYear, setSelectedFilterYear] = useState('2020');

const filterChangeHandler = (selectedYear) => {
  setSelectedFilterYear(selectedYear);
  console.log(selectedYear);
};
const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === selectedFilterYear;
});

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selectedFilterYear={selectedFilterYear} onFilterYearChange={filterChangeHandler}/>
      {filteredExpenses.map((expense) => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        )}
    </Card>
    </div>
  );
}

export default Expenses;