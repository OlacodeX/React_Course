import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //Set the action results you want on each event listened to
  const [enteredYear, setEnteredYear] = useState('');
  const yearChangeHandler = (event) => {
    //Now forward the selected year to the expenses component where it is really needed.
    props.onChangeYearFilter(event.target.value);
    //setEnteredYear(event.target.value);---->This line stores the value, since we dont want to store it, we just need it to get to the expenses component for usage, we are not using it.
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.yearSelected} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
