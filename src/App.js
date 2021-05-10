import Expenses from './components/Expenses_Components/Expenses';

import NewExpense from './components/NewExpenseFormInputs/NewExpense';
import React, {useState} from "react";
  //The props for my ExpenseItem component are stored here in an object array with different values for the keys date,title and amount.
 
 const INITIAL_EXPENSES = [
   {
     id: "e1",
     title: "Toilet Paper",
     amount: 94.12,
     date: new Date(2020, 7, 14),
   },
   {
     id: "e2",
     title: "New TV",
     amount: 799.49,
     date: new Date(2021, 2, 12),
   },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
   },
   {
     id: "e4",
     title: "New Desk (Wooden)",
     amount: 450,
     date: new Date(2021, 5, 12),
   },
 ];
//This function holds all the content of the website.
//Using arrow function for the function below
const App = () => {
  /**
   * Using state, I initialize the expenses array with the INITIAL_EXPENSES then inside the addExpenseHandler function
   * that i set the event listener onAddExpense to on the NewExpense component, I update the expenses array using the
   * setExpenses function from the state destructuring and add the new expense to the expenses array.
   */
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...expenses];//the most recent expense entered comes first, then using the spread operator, I add the remaining/old array.
    });
  };
  return (
    //Normally, I can't use a pure html in js without using "" but because of the JSX tech invented by the react team, this is made possible.
    //JSX stands for javascript xml
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
/** 
function App() {
  //The props for my ExpenseItem component are stored here in an object array with different values for the keys date,title and amount.
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12)
     },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    //Normally, I can't use a pure html in js without using "" but because of the JSX tech invented by the react team, this is made possible.
    //JSX stands for javascript xml
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}*/

export default App;
