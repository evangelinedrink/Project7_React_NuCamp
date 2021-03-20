import React, {Component} from "react"; //Import React and Component from the react library
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from "reactstrap"; //Import the Navbar, NavbarBrand and Jumbotron from Reactstrap
import {NavLink} from "react-router-dom";
class Header extends Component { //Class component doesn't need to have a constructor.
    //To create a responsive NavBar, this component needs to have a constructor section.
    constructor(props) { //Constructor is used to help with the NavbarToggler
        super(props);

        this.toggleNav= this.toggleNav.bind(this); //Ensures that when ToggleNav is called, this keyword would refer to this component because of the bind. This is used for Event Handlers.
        this.state = { //this.state is an object
            isNavOpen: false,
            isModalOpen: false,//Keeps track if the modal is open (true) or closed (false)
        };

        this.toggleNav= this.toggleNav.bind(this); //With an event handler in JSX, you call the method (in this case toggleNav) without using () after the toggleNav method/function.  This is why we have to bind the "this" keyword to toggleNav function.
        this.toggleModal= this.toggleModal.bind(this); //Ensures that "this" keyword is binded to the correct method (in this case to toggleModal)
        this.handleLogin= this.handleLogin.bind(this);
    }

    /*Method that will handle when the NavbarToggler is clicked*/
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    /*Method that will handle when the Modal is clicked*/
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen //When the Modal is open (clicked on by the user) isModalOpen will be changed to the opposite of false (true), meaning that the Modal is opened.
        });
    }

    //handleLogin method- Not building a backend to authenticate this login. It will alert us to the form values (username and password) when it is submitted.
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password:${this.password.value} Remember: ${this.remember.checked}`); /*this.username.value was set by using the innerRef attribute in the Input element of the form.*/
        this.toggleModal(); //Close the Modal with the toggleModal method.
        event.preventDefault(); //To prevent the entire page from being re-rendered (refreshed) in the web browser.
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
                            <span className="navbar-text ml-auto"> {/*Add a button in the Navbar*/}
                                <Button outline onClick={this.toggleModal}> {/*When the button is clicked, the toggleModal method will start running.*/}
                                    <i className="fa fa-sign-in fa-lg"/> Login
                                </Button>
                            </span>
                        </Collapse> 
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/*Creating the Modal Component in our Header. 
                Reactstrap Modal component comes with two attributes, isOpen and toggle. isOpen attribute is false, the modal will be closed and hidden. If isOpen attribute is true
                the modal will be opened and visible. toggle attribute makes it possible to close the modal when it is opened. */}
                   <ModalHeader toggle={this.toggleModal}>Login</ModalHeader> 
                   <ModalBody>
                        <Form onsubmit={this.handleLogin}>
                            <FormGroup> {/*Username input*/}
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input=>this.username=input}/> {/*innerRef attribute will set the input to a variable name. For example the input value here is set as this.username.}
                            </FormGroup>
                            
                            <FormGroup> {/*Password input*/}
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={input=>this.password= input}/>
                            </FormGroup>

                            <FormGroup check> {/*Checkbox input*/}
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input=>this.remember= input}/>
                                    Remember me
                                </Label>
                            </FormGroup>

                            <Button type="submit" value="submit" color="primary">Login</Button> {/*Create the submit button*/}
                        </Form>
                   </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;