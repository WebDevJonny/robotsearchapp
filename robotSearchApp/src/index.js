import React from 'react';
import ReactDOM from 'react-dom'; //React is a Vue library - DOM websites
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'; //allows us to have similar to bootstrap - predefined class names that can be added to components to look nice



ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
