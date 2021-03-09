import React from "react"; //There are no Component objects in this file, which is why it is not in this line.
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

/*This CampsiteInfoComponent.js file will become a presentational component. It uses props from MainComponent.js.  
This is the reason why CampsiteInfoComponent.js is a good candidate to have function components.*/

    
 function RenderCampsite({campsite}) { //Using object destructuring syntax in the props section of the function
        return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name}/>
                <CardBody>
                    <CardTitle>{campsite.name}</CardTitle>
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
                        <RenderCampsite campsite={props.campsite}/> {/*This will call the RenderCampsite method. */}
                        <RenderComments comments={props.campsite.comments}/> {/*This will call the RenderComments method to show the comments in the website. We need to have "campsite" before the "comments" because each the commens are a child object of the campsite values.*/}
                    </div>
                </div>
            );
        }
       
        return (
            <div/>
        );
    }


export default CampsiteInfo;