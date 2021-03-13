import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";

function Home(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md m-1"> {/*Col-md each will take up a 1/3 of the row. For viewports smaller than medium, each element will take up the entire row and stack on each other. m-1 is minimum margin spacing.*/}
                    <RenderCard item={props.campsite}/> {/*Provides the variable item to the RenderCard method, where the item will have information about the campsite.*/}
                </div>

                <div className="col-md m-1">
                    <RenderCard item={props.promotion}/> {/*Provides the variable item to the RenderCard method, where the item will have information about the promotion.*/}
                </div>

                <div className="col-md m-1">
                    <RenderCard item={props.partner}/> {/*Provides the variable item to the RenderCard method, where the item will have information about the partner.*/}
                </div>

            </div>
        </div>
    );
}

function RenderCard({item}) { //This sets up the card that will be used to display the featured campsite, promotion and partner
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default Home;