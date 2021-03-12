import React, {Component} from "react"; //Import React and Component from the react library
import {Navbar, NavbarBrand, Jumbotron} from "reactstrap"; //Import the Navbar, NavbarBrand and Jumbotron from Reactstrap

class Header extends Component { //Class component doesn't need to have a constructor.
    render() {  //Class component will always need a render method which contains a return.
        return(
            <React.Fragment> {/*We are try to return 2 elements from a component, Jumbotron and NavBar.  
            Normally this is not allowed (React only lets you return one element per component), but with React Fragment we can do this. 
            React Fragment acts as a wrapper and doesn't create another DOM node like <div>*/}
                <Jumbotron fluid> {/*Adds a Jumbotron to the website. Fluid attribute*/}
                    <div className="container"> {/*Since these are JSX elements, we have to use className instead of class.*/}
                        <div className="row">
                            <div className="col">
                                <h1>NuCamp</h1>
                                <h2>a better way to camp</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;