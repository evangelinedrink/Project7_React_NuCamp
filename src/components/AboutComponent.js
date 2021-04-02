import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";


function RenderPartner({partner}) {
    if(partner) { //If statement checks to see if the partner argument contains a truthy value.
        return(
        <React.Fragment>
            <Media object src={baseUrl + partner.image} alt={partner.name} width="150px"/> {/*We use curly braces for src and alt because these items are in an object, not a URL.*/}
            <Media body className="ml-5 mb-4">
                <Media heading>{partner.name}</Media>
                {partner.description} {/*Displays the description of each partner.*/}
            </Media>
        </React.Fragment>
          );
    } 
        return <div />; /*Returns an empty div if partner is falsy.*/
    }  

function PartnerList(props) {
    const partners = props.partners.map(partner => { //The partner represents one thing in the PARTNERS array in the partners.js file
        return (
            <Fade in key={partner.id}>
            <Media tag="li"> {/*tag="li" creates a list item*/}
                <RenderPartner partner={partner}/> {/*Setting a variable that can be used in the RenderPartner method. This partner variable contains the information in the PARTNERS array in the partners.js file*/}
            </Media>
            </Fade>
        );
    });
    //When partners data is loading, display loading symbol
    if(props.partners.isLoading) {
        return <Loading/>;
    }

    //Displays error message if loading doesn't work.
    if(props.partners.errMess) {
       return(
        <div className="col">
            <h4>{props.partners.errMess}</h4>
        </div>
       );
    }

    return(
    <div className="col mt-4">
        <Media list>
            <Stagger in>
            {partners}
            </Stagger>
        </Media>
    </div>
    );
}

function About(props) {

 //   const partners = props.partners.map(partner => { //The partner represents one thing in the PARTNERS array in the partners.js file
//        return (
//            <Media tag="li" key={partner.id}> {/*tag="li" creates a list item*/}
//                <RenderPartner partner={partner}/> {/*Setting a variable that can be used in the RenderPartner method. This partner variable contains the information in the PARTNERS array in the partners.js file*/}
//            </Media>
//        );
//    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2016</dd>
                                <dt className="col-6">No. of Campsites in 2019</dt>
                                <dd className="col-6">563</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">4388</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">42</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                                <footer className="blockquote-footer">Muriel Strode,{' '}
                                    <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                                    The Open Court, 1903</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Community Partners</h3>
                </div>
                <div className="col mt-4">
                    <PartnerList partners={props.partners}/>
                </div>
            </div>
        </div>
    );
}

export default About;