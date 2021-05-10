 import ExpenseItem from './ExpenseItem';
 import './ExpensesList.css';
 const ExpensesList = (props) => {
     
           
            /**
             * To make the expense item dynamic i.e update the list upon user input, we will just have to use
             * the map() function built in to js on the props.items array we passed down from the app.js - the map() function updates an array based on a new value added
             * and then create a new array from it.
             * so below now after grabbing the user input, we map it and the return a list for each element in the new mapped array!
             */
           
            /*Instead of mapping the whole expenses, we then map just the filtered expenses, filteredexpenses will therefore always be the original array unless a value is passed in for filteredyear which in our case is by default 2020.
          We can set it to 2021.
          Also now any year we select will return either empty if there is no record for that year or the data for that year.
          If there is no data for the selected year we then use a ternary expression (conditional statement type) as below to return a message and vice versa.*/
           
            /*filteredExpenses.length === 0 ?//If this condition is true, render this p tag  <p>Sorry, you have no expenses for the selected year {filteredYear}.</p> : // render this 
             filteredExpenses.map((expense) => (
              <ExpenseItem
                key={
                  expense.id 
                }
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))*/ 
  /**
   * I can make my code cleaner/shorter while checking for the condition to know if I have data for the selected year or not 
   * by doing it as below instead of using the ternary expression as i am doing already.
   */
    if (props.items.length === 0) {
        return (
          <h2 className="expenses-list__fallback">
            Sorry, you have no expenses for the selected year
          </h2>
        );
  }
   return (
     <ul className="expenses-list">
       {props.items.map((expense) => (
         <ExpenseItem
           key={
             expense.id /**This key prop is used so react can distinctly identify each list item different from the other. This enhances performance and saves from running into bugs. */
           }
           title={expense.title}
           amount={expense.amount}
           date={expense.date}
         />
       ))}
       {/** The static way before I changed it to dynamic
          <ExpenseItem
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          ></ExpenseItem>
          <ExpenseItem
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
          ></ExpenseItem>
          */}
     </ul>
   ); 
 }
 export default ExpensesList;