import React, {Component} from "react";
//import Directory from "./components/DirectoryComponent";
//import {CAMPSITES} from "./shared/campsites";
import Main from "./components/MainComponent";
import "./App.css";


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
      <div className="App">
        <Main/> {/*Rendering of the Main component. This makes the visual component of the website placed in the MainComponent*/}
      </div>
    );
  };
}


export default App; //This means that this function App is the default export for this entire file. JavaScript module is a JavaScript file that must contain one export.
//export {App}; can be used if we don't want to type the above line with default.