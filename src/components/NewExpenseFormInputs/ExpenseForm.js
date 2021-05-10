import './ExpenseForm.css';
//To store the value gotten from the event.target.value i.e the event listener so as to be able to do anyting with it when the form is submitted like store it in the db,
//We can import the useState function from the React library and use it
import React, {useState} from 'react';
//I pass 'props' to the function now cos i am expecting a property that is passed on the ExpenseForm component where i used it inside the NewExpense.js component/file i.e the onSaveExpenseData prop/attribute
const ExpenseForm = (props) => {
  //Set the action results you want on each event listened to
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
  /**
   * To get the value typed in the field and do whatever we want with it e.g log it to the console, we will use the default prop in js 'event' which automatically grabs the
   * change that happens with all the associated details like time, where etc. The value is what we are concerned with here so therefore we will just grab the value from the target array returned by the event prop.
   * this is done below..
   * We however do not need this if the intention is to just output some other stuffs not related to the occured change as in the commented out console.log below
   *
   * */
  const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);//Store the final value of the input field in our state function.
    //console.log("Title Changed!"); // For every letter typed in the title input field, this gets logged in the console.
  };
  const amountChangeHandler = (event) => {
      setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    /**
     * Normally, browsers are built to defaultly send a request to the server when a form is submitted, hence reloading the page.
     * With js we can prevent this and decide to make every action happen on the same page.
     * the preventDefault() function on the 'event' prevents this default behaviour and allows for us to do whatever we want with the form data.
     */
    event.preventDefault();
    //Now create an object to hold all the data entered by the user from the form
    const expenseData = {
      //The values enteredTitle etc are gotten from the state defined for the listener for each inout field above.
      title: enteredTitle,
      amount: +enteredAmount,//the + enforces that the value is saved as a number and not string.
      date: new Date(enteredDate), //This converts the entered date string into a date format
    };
    /**
     * After submitting the form, to clear the user input and make the fields empty, we use 'two way binding'
     * this is done by setting the value attribute on the input fields to the enteredValue e.g enteredTitle for the title field.
     * after this we now set the setEnteredTitle variable to an empty string after the form has been submitted.
     * this way the form gets cleared after each data has been submitted.
     */
    //Now we can access the prop set inside the newexpense.js file here
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };
  //If there is no text/data in between a open and close html/jsx tag, i can self close it as in input below.
  return (
    //I added an event listener to each of the input fields so as to be able to react to the form each time something changes e.g, something is typed into the field etc.
    //To Submit the whole form, i add the onSubmit listener to the form

    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2021-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;