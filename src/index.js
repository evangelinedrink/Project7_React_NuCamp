import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "typeface-lobster";
import "typeface-open-sans";
import "font-awesome/css/font-awesome.css"; //Import Font Awesome to the application
import "bootstrap-social/bootstrap-social.css"; //Import Bootstrap Social to the application
import App from './App'; //The computer is importing the App function that is located in App.js file. ./ means that the App.js file is in the same folder as this index.js file. 
//In addition, we can use import {App} from "./App" if we make sure to have the export{App}; line in the App.js file.*/}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

