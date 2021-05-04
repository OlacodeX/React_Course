import ReactDOM from 'react-dom';

import './index.css';
//We are importing the App function(Which is a component) from the App.js file
import App from './App';
//Here we then tell our application to render the content of our app.js file(typically in the app function), inside the div with id root in the index.html file inside the public folder. This is the only html file a react project will have.
ReactDOM.render(<App />, document.getElementById('root'));
