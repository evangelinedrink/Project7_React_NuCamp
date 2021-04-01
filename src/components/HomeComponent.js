import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";
import {FadeTransform} from "react-animation-components";


function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1"> {/*Col-md each will take up a 1/3 of the row. For viewports smaller than medium, each element will take up the entire row and stack on each other. m-1 is minimum margin spacing.*/}
                    <RenderCard 
                        item={props.campsite} /*Provides the variable item to the RenderCard method, where the item will have information about the campsite.*/
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    /> 
                </div>

                <div className="col-md m-1">
                    <RenderCard  /*Provides the variable item to the RenderCard method, where the item will have information about the promotion.*/
                    item={props.promotion}
                    isLoading={props.promotionLoading}
                    errMess={props.promotionErrMess}
                    /> 
                </div>

                <div className="col-md m-1">
                    <RenderCard item={props.partner}/> {/*Provides the variable item to the RenderCard method, where the item will have information about the partner.*/}
                </div>

            </div>
        </div>
    );
}

function RenderCard({item, isLoading, errMess}) { //This sets up the card that will be used to display the featured campsite, promotion and partner
    if(isLoading) {
        return <Loading />;    
    }
    if(errMess) {
        return <h4>{errMess}</h4>;
    }

    return (
        <FadeTransform in transformProps={{exitTransfrom: "scale(0.5 translateY(50%)"}}yar>  {/*in component is a Boolean that renders the transition*/}
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

export default Home;