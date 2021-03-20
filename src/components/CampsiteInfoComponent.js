import React, { Component } from "react"; //Import React and Component from the react library
//import React from "react"; //There are no Component objects in this file, which is why it is not in this line.
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm } from "react-redux-form";

/*This CampsiteInfoComponent.js file will become a presentational component. It uses props from MainComponent.js.  
This is the reason why CampsiteInfoComponent.js is a good candidate to have function components.*/

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false, //Keeps track if the modal is open (true) or closed (false)
        }
        this.toggleModal = this.toggleModal.bind(this); //Ensures that "this" keyword is binded to the correct method (in this case to toggleModal)
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    //Method that will handle when the Modal is clicked.
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen //When the Modal is open (clicked on by the user) isModalOpen will be changed to the opposite of false (true), meaning that the Modal is opened.
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " +JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> {/*Creating the Modal Component in our Header. 
                Reactstrap Modal component comes with two attributes, isOpen and toggle. isOpen attribute is false, the modal will be closed and hidden. If isOpen attribute is true
                the modal will be opened and visible. toggle attribute makes it possible to close the modal when it is opened. */}
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}> {/*When the form is submitted, the handSubmit function will run and show a message with information written in the form.*/}

                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label> {/*Rating section of form*/}
                                <Control.select model=".rating" id="rating" name="rating"> {/*Gives Options for the user to select the rating for the campsite*/}
                                    <option value="5">5</option>
                                    <option value="4">4</option>
                                    <option value="3">3</option>
                                    <option value="2">2</option>
                                    <option value="1">1</option>
                                </Control.select>
                            </div>

                            <div className="form-group">
                                <Label htmlFor="author">Author</Label> {/*Author section of form*/}
                                <Control.text model=".author" id="author" name="author" placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                {/*Comment area of form*/}
                                <Control.textarea model=".text" id="text" name="text" placeholder="Write your comment here."/>
                            </div>

                            <Button type="submit" color="primary">Submit Comment</Button> {/*For a submit button, make sure it is a type="submit" button. That way the data will then be sent.*/}
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

function RenderCampsite({ campsite }) { //Using object destructuring syntax in the props section of the function
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments) { //This will check to see if the comments are not null or undefined. if(comments) checks this because a null or undefined value would be falsy.
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                  {comments.map(comment => {
                    return ( //This will ensure that the values posted below will show in the webpage.
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p>
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p> {/*This will format the date correctly. */}
                        </div>);
                }
            )} 
                <CommentForm /> {/*Render (show on the website) the information in the CommentForm method*/}
            </div>
        );
    }
    return <div /> //Returns an empty dif if the comments are not defined or null
}

function CampsiteInfo(props) {
    if (props.campsite) { //if(campsite) means that there is a campsite parameter. if(campsite)===true because if(campsite) is the same as if(campsite===campsite)
        return (
            <div className="container"> {/*This will make the cards that display the campsites centered in the website and not go to the left. */}
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem> {/*Add a dynamic text with the {props.campsite.name}*/}
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2> {/*This is for the heading.*/}
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <RenderCampsite campsite={props.campsite} /> {/*This will call the RenderCampsite method. */}
                    <RenderComments comments={props.comments} /> {/*This will call the RenderComments method to show the comments in the website. */}
                </div>
            </div>
        );
    }

    return (
        <div />
    );
}


export default CampsiteInfo;