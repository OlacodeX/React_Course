import './Card.css';
function Card(props) {
  /**
   * The main reason for this component is to have a reusable component for features with same css styling throughoput our project.
   * E.g for buttons and as in this case, for cards, i.e same border radius, box-shadow etc
   * The variable declared below allows us to be able to add ClassName to our jsx tag in the component we might want to use it for styling.
   * So any className we add will be stored in the classes variable and the styling corresponding to it be added.
   * Since we can not be default write normal html tags within a surrounding jsx/components tag, we then pass props to this function above,
   * Then we pass it as data with React built in .children attribute as below, therefore any html tags we write in between our <Card></Card> jsx/component where ever we use it, will then be treated as its children and rendered normally.
   *
   */
  const classes = "card " + props.className; //card is the className we are using in the Card.css while props.className is any other class we will set on the <Card></Card> jsx/component where ever we use it.
  return <div className={classes}>{props.children}</div>;
}
export default Card;