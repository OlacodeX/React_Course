import './NewExpense.css';
import React, { useState } from "react"; 
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    /**
     * To make the form show on button click or hidden by default, we will use the State function from react
     * The logic is to have a true or false condition which we will then use to display the form below.
     */
    const [showForm, setShowForm] = useState(false);//Set it to false at the beginning so the form is hidden by default.
    //Function to trigger when the form is submitted
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, //Using the spread operator to get it from the ExpenseForm.js
            id: Math.random().toString()//Add an id to each dataset in the object
        };
        //Here I now pass the expenseData object to the onAddExpense prop I created on the NewExpense component inside the App.js
        props.onAddExpense(expenseData);
        //To hide form on form submit
        setShowForm(false);
    };
    //Create the function to show or hide form on button click
    const showFormHandler = () => {
        setShowForm(true);
    };
    //Create the function to hide form on cancel button click.
    const hideFormHandler = () => {
        setShowForm(false);
    };
    return (
      //the onSaveExpenseData is a listener we created by ourselves,it can therefore take any name as long as we are passing a function to it.
      <div className="new-expense">
          {/**Below I am saying, if showForm is false, give me the button, if it is true, show the form!
           * The condition first and the result if it is met after the &&
           * I can use an if&else statement here too or any other conditional statement.
           */}
        {!showForm && (
          <button onClick={showFormHandler}>Add New Expense</button>
        )}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>}
      </div>
    );
};

export default NewExpense;