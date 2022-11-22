import React, {useState} from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
const[selectedFilterYear, setSelectedFilterYear] = useState('2022');

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
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
  );
}

export default Expenses;