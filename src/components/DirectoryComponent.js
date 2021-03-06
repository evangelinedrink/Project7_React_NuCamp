import { render } from "@testing-library/react";
import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";
import CampsiteInfo from "./CampsiteInfoComponent";

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

    render() {
        const directory= this.props.campsites.map(campsite=> {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}> {/*When the user clicks on the card, information will be prompted.*/}
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        <CampsiteInfo campsite={this.state.selectedCampsite} /> {/*This will call the CampsiteInfo component into the DirectoryComponent.js*/}
        </div>
    );
    }
}


export default Directory;