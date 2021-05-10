import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import Card from "../UI_Related_Components/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
/**
 * This component being the parent i.e the one that combines the different components of the expenses - title, date & amount
 * It accepts the props as argument which is the expenses object defined in the app.js component which is like the grand parent of all the components and which the
 * expenses component feeds with data or reports to.
 * The expenses object is an array that holds all the expenses made.
 * We therefore now pass this props in each array to the ExpenseItem component which is responsible for formating, styling and determining how they appear in the browser.
 */
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const yearFilterChangeHandler = (
    selectedYear
  ) /**i.e the year value passed from the ExpensesFilter.js file */ => {
    //Do whatever you want with the year here!!
    setFilteredYear(selectedYear);
  };
  //To implement the filter on click
  const filteredExpenses = props.items.filter((expense) => {
    //Below I am checking if there is/are any expense(s) with the filtered year but then since the filtered year
    //is passed down as a string and just the year, I have to convert the expenses date to string as well as extract
    //just the year alone as is done below.
    return expense.date.getFullYear().toString() === filteredYear;
  }); //Filter the whole expenses
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={
            filteredYear /**This allows for two way binding, i.e making the dropdown to show the selected yr as default */
          }
          onChangeYearFilter={yearFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
