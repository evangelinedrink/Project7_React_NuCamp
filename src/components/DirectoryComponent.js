import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";


//This DirectoryComponent.js file will become a presentational component. It uses props from the MainComponent.js.  
//This is the reason why DirectoryComponent.js is a good candidate to have function components.

function RenderDirectoryItem({campsite,onClick}) {
    return (
        <Card onClick={() => onClick(campsite.id)}> {/*When the user clicks on the card, the onCampsite select method in MainComponents.js will be called. The information will be shown on the webpage.*/}
        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
        <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
        </Card>
    )
}
function Directory(props) {
    
        const directory= props.campsites.map(campsite=> {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick}/>
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


export default Directory;