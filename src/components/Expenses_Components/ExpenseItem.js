//To make our event handler work n reflect in the browser, import the useState() function from react below.
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'; 
import Card from "../UI_Related_Components/Card";
import './ExpenseItem.css';
//Using arrow function for the function below
const ExpenseItem = (props) => {
  //I want to use event hnadler to change the content of the title field when clicked
  //hooks return arrays and in the case below, it will retun an array with the first value being the title and second is the updated title.
  //We will therefore use destructuring to access each elements of the array.
  const [title, setTitle]/**The first element 'title' in the array is the old value for title while the second 'setTitle' is the updating function that we will call to set the new value as below */ = useState(props.title);//the imported react default function(hook) - useState() function
  //hooks are used like as above and they must be called inside the component(functions) alone
  
  const clickHandler = () => {
    //do anything when the button is clicked.
    setTitle('Updated!');//This function comes from the hook,destructured array
    console.log(title);
  };
  /** If I want to have various ExpenseItem() I will pass the various keys as properties as in props (an object) above, access each key like below and then define the keys in my App.js and then set them as attributes(as in html) to the component for outputting
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;*/
  //Note that you can't use more than one root element, e.g there has to be like a parent tag - div or someother tag to envelope others
  //Then to break them down into multiple lines for readability, wrap them in a (). This way js recognizes them as just one block of code

  return (
    //ClassName is used React instead of just Class in normal html
    //Since I removed the date segment and made it a new component, I need to set the attribute date on the ExpenseDate component jsx so that the ExpenseDate component can access it for usage.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title /**Instead of ExpenseTitle */}</h2>
        <div className="expense-item__price">
          ${props.amount /**Instead of expenseAmount */}
        </div>
      </div>
      {/**Events */}
      <button onClick={clickHandler /**we don't add the () after the clickhandler function cos we don't want the action to take place unless the button is clicked but if we had added it, the function would have been executed immediately the return block is been executed */}>Change Title</button>
    </Card>
  );
};
  /**
function ExpenseItem(props) {
  /** If I want to have various ExpenseItem() I will pass the various keys as properties as in props (an object) above, access each key like below and then define the keys in my App.js and then set them as attributes(as in html) to the component for outputting
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;*/
  //Note that you can't use more than one root element, e.g there has to be like a parent tag - div or someother tag to envelope others
  //Then to break them down into multiple lines for readability, wrap them in a (). This way js recognizes them as just one block of code
/**
  return (
    //ClassName is used React instead of just Class in normal html
    //Since I removed the date segment and made it a new component, I need to set the attribute date on the ExpenseDate component jsx so that the ExpenseDate component can access it for usage.
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">*/
       /** <h2>{props.title /**Instead of ExpenseTitle }</h2>*/
       /** <div className="expense-item__price">
          ${props.amount /**Instead of expenseAmount }
        </div>
      </div>
    </Card>
  );
}*/

//Export component to use
export default ExpenseItem;