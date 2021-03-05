import { render } from "@testing-library/react";
import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state= { //In the constructor you can define a state using this.state because you are assigning a value to it. Outside of the constructor, you must use this.setState because the object is changing.
            selectedCampsite: null //selectedCampsite will keep track of what campsite the user selected.  null means no campsite was selected
        };
    }

    onCampsiteSelect(campsite) { //This method will work whenever a campsite is selected by the user. The campsite object will get passed into this method. this.setState will change the value of the campsite into state. When selected, the campsite description will be given.
        this.setState({selectedCampsite: campsite}); //Outside of the constructor, you must use this.setState because the object is changing.
    }

    renderSelectedCampsite(campsite) { //This will display the Selected Campsite that the user clicked on.
        if (campsite) { //In this line, if campsite value is true, it will return the value. (campsite) is the same as (campsite===true)
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div/> //If the campsite value was null, undefined or falsy, then this will return a empty div. 
    }

    render() {
        const directory= this.props.campsites.map(campsite=> {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}> //When the user clicks on the card, information will be prompted.
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
    
        return ( //This return is for displaying values in the website.  It is not located in a component except for the Directory class.
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)} //This is calling the renderSelectedCampsite method. It will display the selected campsite.
                    </div>
                </div>
            </div>
        );
    }
}


export default Directory;