import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Input, Col, Row} from "reactstrap"; //Client side Form validation (shows error messages) will be provided thanks to FormFeedback
import {Link} from "react-router-dom";
import {Control, LocalForm, Errors} from "react-redux-form";

const required= val => val //All form inputs are received as strings. We are verifying that there is a value (input)
//ContactForm to use the redux store instead of the contact components local state.
class Contact extends Component {
    constructor(props) {
        super(props);

        this.state={
            firstName: " ", //Sets to an empty string
            lastName: " ",
            phoneNum: " ",
            email: " ",
            agree: false, //Boolean value to false if the person agrees to be contacted or not.
            contactType: "By Phone", //By phone is set as a default
            feedback: " ",
            touched: { //touched ensures that the user has clicked on the fields below in the form
                firstName: false, //Initially set to false because the user wouldn't have clicked on the fields in the form when they first enter this part of the website
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        //Bind reference to the "this" keyword so the this.whatever will be binded to the correct value.
        //this.handleInputChange= this.handleInputChange.bind(this);
        //Bind the handleSubmit(event) event handler to the "this" statement, so that "this" keyword would be binded to the correct value inside of handleSubmit method. 
        //this.handleSubmit= this.handleSubmit.bind(this);
    }

    //Form Validation for the controlled form that didnt use Redux
    /*validate(firstName, lastName, phoneNum, email) {
        const errors= { //Sets up error messages. Empty strings means there are no error messages
            firstName: " ",
            lastName: " ",
            phoneNum: " ",
            email: " "   
        };

        if(this.state.touched.firstName) { //if statement checks to see if the firstName field has been clicked on by the user.
            if(firstName.length<2) { //Checks to see if the length of the firstName input field is less than 2. If true, then there will be an error message (code is in the line below)
                errors.firstName= "First name must be at least 2 characters.";
            } else if(firstName.length>15) {
                errors.firstName= "First name must be 15 or less characters.";
            }
        }

        if(this.state.touched.lastName) { //if statement checks to see if the lastName field has been clicked on by the user.
            if(lastName.length<2) { //Checks to see if the length of the lastName input field is less than 2. If true, then there will be an error message (code is in the line below)
                errors.lastName= "Last name must be at least 2 characters.";
            } else if(lastName.length>15) {
                errors.lastName= "Last name must be 15 or less characters.";
            }
        }

        //Validating the phone number
        const reg=/^\d+$/; //This regex makes sure that the phone number field in the form only contains numbers (signified by the \d+). Regeex specifies a pattern to be matched.  It returns true or false if it matches or not.
        if(this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum= "The phone number should contain only numbers.";
        }

        //Validating if the email field has been clicked on in the form
        if(this.state.touched.email && !email.includes("@")) { //If email field was touched (but not typed in) and does not include an @ symbol, then an error message would be displayed.
            errors.email= "Email should contain an @.";
        }

        return errors; //Return the errors object.

    }*/

    //The lines commented below were for the controlled form that did not use Redux.
    //Event handler method, handleBlur. We are passing an argument that is not an "event," we need to wrap the handleBlur inside another function. Arrow function is used to define this method.
    //If we use an arrow function, we don't need to use the "bind" method to bind the "this" keyword.
   /* handleBlur= (field) => () => {
       this.setState({ //setState to change the "touched" object. 
           touched: {...this.state.touched, [field]: true} //We only want to change one of the properties, so we use the spread syntax. The [field]: true means that the field was clicked on by the user.
       }); 
    }
    //Handles changes in Form Elements
    handleInputChange(event) {
        const target= event.target;
        const name= target.name;
        const value= target.type === "checkbox" ? target.checked : target.value; //If the type of the form element is a checkbox, then we get a value from the checked attribute. If it is not a checkbox, then we get the value from the target value.

        this.setState({
            [name]: value
        })
    } */

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " +JSON.stringify(values));
        //event.preventDefault(); //Normally when you submit a form, it refreshes the entire page. We don't want the page to be refreshed, so we use event.preventDefault(); This was for the controlled form that did not use Redux
    }

    render() { //Render displays things inside of it to the web page.

       //const errors= this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email); //Variables declared in functions and methods are locally scoped, so the errors variable is not available here. We declare a new variable errors here. Get the values of the errors from the this.state method.
        //Any time there is a change in the input field, the this.state.name will be re-rendered, so it will always be up to date.
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>

                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1 Nucamp Way<br />
                            Seattle, WA 98001<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> campsites@nucamp.co</a>
                    </div>
                </div>

                {/*Add the Contact Form*/}
                <div className="row row-content">
                    <div className="col-12">
                        <h2>Send us your Feedback</h2>
                        <hr />
                    </div>
                    <div className="col-md-10">
                        <LocalForm onSubmit={values => this.handleSubmit()}> {/*Redux form component is called LocalForm*/}
                            <Row clasName="form-group"> {/*Using Redux to create the form group*/}
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}> {/*This is equivalent to line 77: <div className="col-md-10">*/} 
                                    <Control.text model=".firstName" id="firstName" name="firstName" /*Control.text is the React-Redux element for an input element. 
                                    It says that this is a text box area. For the Control.text we have to add a model attribute. Model attribute tells redux that the value for this field is stored in the state named firstName.*/
                                        placeholder="First Name"
                                        className="form-control"
                                        //value={this.state.firstName}
                                        //invalid={errors.firstName} //Invalid attribute will be a Boolean attribute.  Is there an error method to this field? If errors.firstName is an empty string, this invalid method would be false. If it is not empty, it will be true.
                                        //onBlur={this.handleBlur("firstName")} /*When a user clicks on a field and leaves it, the computer can see this by using an onBlur event handler.*/
                                        //onChange={this.handleInputChange} 
                                    />
                                    {/*<FormFeedback>{errors.firstName}</FormFeedback> {/*Shows content of the error message in the input*/}
                                </Col>
                            </Row>
                            <Row clasName="form-group">
                                <Label htmlFor="lastName" md={2}>Last Name</Label> {/*Since for is already used for for loops in JavaScript, we have to use htmlFor to let the computer know it is a For element of HTML.*/}
                                <Col md={10}>
                                    <Control.text model=".lastName" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        className="form-control"
                                        //value={this.state.lastName}
                                        //invalid={errors.lastName} //Invalid attribute will be a Boolean attribute.  Is there an error method to this field? If errors.firstName is an empty string, this invalid method would be false. If it is not empty, it will be true.
                                        //onBlur={this.handleBlur("lastName")} /*When a user clicks on a field and leaves it, the computer can see this by using an onBlur event handler.*/
                                        //onChange={this.handleInputChange} 
                                    />
                                    {/*<FormFeedback>{errors.lastName}</FormFeedback> {/*Shows content of the error message in the input*/}
                                </Col>  
                            </Row>                      
                            <Row clasName="form-group">
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum" //Value for the model attribute will always be the same for the name, except it has a dot in front of it.
                                        placeholder="Phone number"
                                        className="form-control"
                                        //value={this.state.phoneNum}
                                        //invalid={errors.phoneNum} //Invalid attribute will be a Boolean attribute.  Is there an error method to this field? If errors.firstName is an empty string, this invalid method would be false. If it is not empty, it will be true.
                                        //onBlur={this.handleBlur("phoneNum")} /*When a user clicks on a field and leaves it, the computer can see this by using an onBlur event handler.*/
                                        //onChange={this.handleInputChange} 
                                    />
                                    {/*<FormFeedback>{errors.phoneNum}</FormFeedback> {/*Shows content of the error message in the input*/}
                                </Col>
                            </Row>
                            <Row clasName="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        //value={this.state.email}
                                        //invalid={errors.email} //Invalid attribute will be a Boolean attribute.  Is there an error method to this field? If errors.firstName is an empty string, this invalid method would be false. If it is not empty, it will be true.
                                        //onBlur={this.handleBlur("email")} /*When a user clicks on a field and leaves it, the computer can see this by using an onBlur event handler.*/
                                        //onChange={this.handleInputChange} /*This corresponds to the handleInputChange method above.*/
                                    /> 
                                    {/*<FormFeedback>{errors.email}</FormFeedback> {/*Shows content of the error message in the input*/}
                                </Col>
                            </Row>
                            <Row clasName="form-group">
                                <Col md={{size: 4, offset: 2}}> {/*This line means: <div class="col-md-4 offset-md-2>*/}
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox /*This creates a checkbox input.*/
                                                model=".agree"
                                                name="agree"
                                                className="form-check-input"//className for checked box control
                                                //checked={this.state.agree}
                                                //onChange={this.handleInputChange} 
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <Control.select model="contactType" name="contactType" /*Select input.*/
                                            className="form-control">
                                            {/*value={this.state.contactType}*/}
                                            {/*onChange={this.handleInputChange}>*/}
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row clasName="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".feedback" id="feedback" name="feedback"
                                        rows="12"
                                        className="form-control"
                                        //value={this.state.feedback}
                                        //onChange={this.handleInputChange}>
                                    />
                                </Col>
                            </Row>
                            <Row clasName="form-group">
                                <Col md={{size: 10, offset: 2}}> {/*This line means: <div class="col-md-10 offset-md-2"*/}
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}



export default Contact;