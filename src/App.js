import React, {Component} from "react";
//import Directory from "./components/DirectoryComponent";
//import {CAMPSITES} from "./shared/campsites";
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";//Import the Provider component 
import {ConfigureStore} from "./redux/configureStore"; 
import "./App.css";

const store= ConfigureStore(); //Since ConfigureStore returns a redux store, we capture the store in this variable
class App extends Component {
  //Code in lines 10-15 are commented out because the state components are placed in the MainComponent.js file
  /*constructor(props) {
    super(props);
    this.state= {
      campsites:CAMPSITES //This will display the data from the CAMPSITES variable in campsites.js
    };
  }*/

  render() {
    return (
      <Provider store={store}> {/*This makes the redux store available to all connected components that are childrend of App.*/}
        <BrowserRouter> {/*BrowserRouter makes it the highest level component and it gives it access to the Main component*/}
        <div className="App">
          <Main/> {/*Rendering of the Main component. This makes the visual component of the website placed in the MainComponent*/}
        </div>
        </BrowserRouter>
      </Provider>
    );
  };
}


export default App; //This means that this function App is the default export for this entire file. JavaScript module is a JavaScript file that must contain one export.
//export {App}; can be used if we don't want to type the above line with default.