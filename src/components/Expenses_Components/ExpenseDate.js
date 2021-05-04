import "./ExpenseDate.css";
function ExpenseDate(props) {
  //Instead of having date outputted as a full string like this { props.date.toISOString() } to the screen, lets extract the month, year and date separately and make it loook nice!
  // { props.date.toISOString() /**Since the date stored in expenseDate variable isnt a string, I have to convert it into string for it to be outputed on the screen.**/ /**I can also run normal js codes inside this brackets, like add numbers, use js built in functions etc, the result will automatically fill this space*/}
  const month = props.date.toLocaleString("en-UK", { month: "long" }); //First parameter specifys the language, second parameter specifys the format style we want. Read about the toLocaleString() js in built function later online
  const day = props.date.toLocaleString("en-UK", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
