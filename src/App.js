import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import Directory from "./components/DirectoryComponent";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container"> {/*Creates a containter class in React. We have to use className when specifying a class in React.*/} 
            <NavbarBrand href="/">NuCamp</NavbarBrand>
          </div>
        </Navbar>
        <Directory />
      </div>
    );
  }
}

export default App; //This means that this function App is the default export for this entire file. JavaScript module is a JavaScript file that must contain one export.
//export {App}; can be used if we don't want to type the above line with default.