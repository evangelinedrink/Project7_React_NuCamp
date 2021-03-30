import React from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";


//This DirectoryComponent.js file will become a presentational component. It uses props from the MainComponent.js.  
//This is the reason why DirectoryComponent.js is a good candidate to have function components.

function RenderDirectoryItem({campsite}) {
    return (
        <Card > {/*When the user clicks on the card, the onCampsite select method in MainComponents.js will be called. The information will be shown on the webpage.*/}
            <Link to={`/directory/${campsite.id}`}> {/*Create a link for the campsite with /director(campsite.id) */}  
                <CardImg width="100%" src={baseUrl + campsite.image} alt={campsite.name}/> {/*By using the baseUrl we are getting the image from a server, it is not in the client side.*/}
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}
function Directory(props) {
    
        const directory= props.campsites.campsites.map(campsite=> {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <RenderDirectoryItem campsite={campsite}/>
                </div>
            );
        });

    if(props.campsites.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    if(props.campsites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr /> 
                </div>
            </div>

            <div className="row">
                {directory}
            </div>
        </div>
    );
    
}


export default Directory;