import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


//This DirectoryComponent.js file will become a presentational component.
class Directory extends Component {
    render() {
        const directory= this.props.campsites.map(campsite=> {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}> {/*When the user clicks on the card, the onCampsite select method in MainComponents.js will be called. The information will be shown on the webpage.*/}
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
        </div>
    );
    }
}


export default Directory;