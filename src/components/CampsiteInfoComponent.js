import React, {Component} from "react"; //Import React and Component from the react library
//import React from "react"; //There are no Component objects in this file, which is why it is not in this line.
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {Link} from "react-router-dom";

/*This CampsiteInfoComponent.js file will become a presentational component. It uses props from MainComponent.js.  
This is the reason why CampsiteInfoComponent.js is a good candidate to have function components.*/

class CommentForm extends Component{
    render() {
        return(
            <div>
                <Button outline><i className="fa fa-pencil fa-lg"/>Submit Comment</Button>
                <Modal></Modal>
            </div>
        );
    }
}
    
 function RenderCampsite({campsite}) { //Using object destructuring syntax in the props section of the function
        return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name}/>
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
    }

function RenderComments({comments}) {
        if(comments) { //This will check to see if the comments are not null or undefined. if(comments) checks this because a null or undefined value would be falsy.
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment=> {
                        return( //This will ensure that the values posted below will show in the webpage.
                            <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}</p> 
                            <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p> {/*This will format the date correctly. */}
                        </div>);
                        }
                    )}
                </div>
            );
        }
        return <div/> //Returns an empty dif if the comments are not defined or null
    }
    
function CampsiteInfo(props) {
        if(props.campsite) { //if(campsite) means that there is a campsite parameter. if(campsite)===true because if(campsite) is the same as if(campsite===campsite)
            return(
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
                        <RenderCampsite campsite={props.campsite}/> {/*This will call the RenderCampsite method. */}
                        <RenderComments comments={props.comments}/> {/*This will call the RenderComments method to show the comments in the website. */}
                        <CommentForm/> {/*Render (show on the website) the information in the CommentForm method*/}
                    </div>
                </div>
            );
        }
       
        return (
            <div/>
        );
    }


export default CampsiteInfo;