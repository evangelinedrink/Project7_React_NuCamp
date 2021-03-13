import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

//This DirectoryComponent.js file will become a presentational component. It uses props from the MainComponent.js.  
//This is the reason why DirectoryComponent.js is a good candidate to have function components.

function RenderDirectoryItem({campsite}) {
    return (
        <Card > {/*When the user clicks on the card, the onCampsite select method in MainComponents.js will be called. The information will be shown on the webpage.*/}
            <Link to={`/directory/${campsite.id}`}> {/*Create a link for the campsite with /director(campsite.id) */}  
                <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}
function Directory(props) {
    
        const directory= props.campsites.map(campsite=> {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite}/>
                </div>
            );
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                </div>
            </div>

            <div className="row">
                {directory}
            </div>
        </div>
    );
    
}


export default Directory;