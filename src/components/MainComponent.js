import React, { Component } from 'react'; //Do this to create a Component for this file.
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'; //The ../ tells the computer to go down one directory, then it will go to the shared folder and then the campsites.js
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import {COMMENTS} from "../shared/comments"; /*The ../ tells the Main Component to leave its components folder and go to the shared folder.*/
import {PARTNERS} from "../shared/partners"; /*Note that the two dots here used in ../shared mean the same thing as when you use the command cd .. from 
a command prompt -- to go down one directory (since MainComponent.js is in the components directory and you need to back out of this directory before being able to access the shared directory.*/
import {PROMOTIONS} from "../shared/promotions";
import {Switch, Route, Redirect} from "react-router-dom"; //Setups the brains of our router so it knows where to send users when they click on buttons on the website

//This MainComponent.js is a container component that sits below the App.js file.
/* "This" keyword is used for values that will change based
on the user's input*/
class Main extends Component {
    constructor(props) {
        super(props);
        this.state= { //In the constructor you can define a state using this.state because you are assigning a value to it. Outside of the constructor, you must use this.setState because the object is changing.
            campsites: CAMPSITES, //The CAMPSITES Array containing information about the Campsites is declared here as an object named "campsites"
            //selectedCampsite: null, //selectedCampsite will keep track of what campsite the user selected.  null means no campsite was selected
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

//    onCampsiteSelect(campsiteId) { //This method will work whenever a campsite is selected by the user. The campsite object will get passed into this method. this.setState will change the value of the campsite into state. When selected, the campsite description will be given.
//        this.setState({selectedCampsite: campsiteId}); //Outside of the constructor, you must use this.setState because the object is changing.
//    }

    render() {
        const HomePage= () => { //Arrow functions inherit the "this" of their parent scope.  This is why we are using it here because we want "this" objects from the above lines. Locally Scope Component: only accessible in this file, MainComponent
            return (
                <Home //All of the objects that are assigned variables in this element (campsite, promotion, partner) will be passed to the HomeComponent.js file.
                    //Displaying Featured campsites, promotions and partners in the Home page
                    /*The filter array methold is used to filter for objects where the featured property evaluates as true.*/
                    /*Since the filter array method returns an array and we want to pass an object, use [0] to access the first and only object in the array.*/
                    campsite={this.state.campsites.filter(campsite=> campsite.featured)[0]} /*This will display the featured campsite in the Home page*/
                    promotion={this.state.promotions.filter(promotion=> promotion.featured)[0]} 
                    partner={this.state.partners.filter(partner=> partner.featured)[0]} 
                />
                );
            };
            
        const CampsiteWithId= ({match}) => { //This method will select a campsite and include comments for that campsite.
            return(
                <CampsiteInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}  /*The + in front of a term that contains a number as a string will remove the string from the number. the [0] will return a string and not an array (what filter method normally returns)*/
                    comments ={this.state.comments.filter(campsite=> campsite.id=== +match.params.campsiteId)} 
                    /> 
            );
        }

        return (
            <div>
                <Header /> {/*Calls the Header component*/}
                <Switch> {/*This Switch component is like a Switch Statement in JavaScript. The Route components represent Case in the Switch statement. The Redirect component acts as a Default statement in a JavaScript Switch statement.*/}
                    <Route path= "/home" component={HomePage} /> {/*Route any traffic to the Home page if the path "home" is selected.*/}
                    <Route exact path="/directory" render={()=> <Directory campsites={this.state.campsites} />} /> {/*The exact path will lead to the Directory Component. Information about the campsites (inside of the this.state.campsites) is given a variable name "campsites" that can be used in the Directory Component.*/}
                    <Route exact path="/contactus" component={Contact} /> {/*We are not passing a state data to the Contact Component, which is why we can just assign the variable component with the object Contact.
                    Unlike the <Route> for the Directory component, you use the attribute component instead of render above. That is because you do not need to pass any state data into the Contact component. */}
                    <Route path="/directory/:campsiteId" component={CampsiteWithId}/> {/*The colon says waht follows the forward slash is going to be a parameter. It will store it as campsiteId.*/ }
                    <Redirect to="/home" /> {/*This Redirect component acts as a catch all, sort of like a Default statement in a JavaScript Switch statement.*/}
                </Switch>
                <Footer /> {/*Calls/renders the Footer component*/}
                
                {/*<CampsiteInfo campsite={this.state.campsites.filter(campsite=> campsite.id=== this.state.selectedCampsite)[0]} /> {/*Filter always returns an array, but us. CampsiteInfo component is expecting the computer to return an object, not an array, 
                which is why we are using an index ([]) to get only one value (one campsite object) from the array to the CampsiteInfo component.*/}
                {/*This will call the CampsiteInfo component into the DirectoryComponent.js*/}
                    
            </div>
        );
    };
}

export default Main;