import Expenses from './components/Expenses_Components/Expenses';

import NewExpense from './components/NewExpenseFormInputs/NewExpense';
//This function holds all the content of the website.
//Using arrow function for the function below
const App = () => {
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
  return (
    //Normally, I can't use a pure html in js without using "" but because of the JSX tech invented by the react team, this is made possible.
    //JSX stands for javascript xml
    <div>
      <NewExpense />
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
