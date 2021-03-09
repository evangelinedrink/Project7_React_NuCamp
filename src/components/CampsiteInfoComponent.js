import React, {Component} from "react"; //Do this to create a Component for this file.
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

class CampsiteInfo extends Component {
    
    renderCampsite(campsite) {
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

    renderComments(comments) {
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
    
    render() {
        if(this.props.campsite) { //if(campsite) means that there is a campsite parameter. if(campsite)===true because if(campsite) is the same as if(campsite===campsite)
            return(
                <div className="container"> {/*This will make the cards that display the campsites centered in the website and not go to the left. */}
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)} {/*Here we are calling the renderCampsite method by using curly braces (because this is an object). Objects use curly braces.
                        In line 24, it takes information from somewhere else that can change values,
                        this is why we need "this" keyword. "This" keyword is used for values that will change
                        from the user's input*/}

                        {this.renderComments(this.props.campsite.comments)} {/*This will call the renderComments method to show the comments in the website. We need to have "campsite" before the "comments" because each the commens are a child object of the campsite values.*/}
                    </div>
                </div>
            );
        }
       
        return (
            <div/>
        );
    }
}

export default CampsiteInfo;