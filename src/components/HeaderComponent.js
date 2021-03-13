import React, {Component} from "react"; //Import React and Component from the react library
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from "reactstrap"; //Import the Navbar, NavbarBrand and Jumbotron from Reactstrap
import {NavLink} from "react-router-dom";
class Header extends Component { //Class component doesn't need to have a constructor.
    //To create a responsive NavBar, this component needs to have a constructor section.
    constructor(props) { //Constructor is used to help with the NavbarToggler
        super(props);

        this.toggleNav= this.toggleNav.bind(this); //Ensures that when ToggleNav is called, this keyword would refer to this component because of the bind. This is used for Event Handlers.
        this.state = { //this.state is an object
            isNavOpen: false
        };
    }

    /*Method that will handle when the NavbarToggler is clicked*/
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

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

                <Navbar dark sticky="top" expand="md"> {/*expand="md" will make the Navbar collapsable when viewports is smaller than medium (md)*/}
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/images/logo.png" height="30" width="30" alt="NuCamp Logo" /></NavbarBrand> {/*className="mr-auto" this will help with alignment. Since the image is in a Public folder, you don't have to write Public in the src to find the image.*/}
                        <NavbarToggler onClick={this.toggleNav} /> {/*This component will create the Toggle button. onClick={this.toggleNav} means that when clicked, the toggleNav method will run.*/}
                        <Collapse isOpen={this.state.isNavOpen} navbar> {/*Creating NavLinks by placing it in a Collpase element. navbar is needed at the end of the element to create NavLinks*/}
                            <Nav navbar>

                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse> 
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;