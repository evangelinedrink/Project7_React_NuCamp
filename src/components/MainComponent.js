import React, { Component } from 'react'; //Do this to create a Component for this file.
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'; //The ../ tells the computer to go down one directory, then it will go to the shared folder and then the campsites.js
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom"; //Setups the brains of our router so it knows where to send users when they click on buttons on the website

//This MainComponent.js is a container component that sits below the App.js file.
/* "This" keyword is used for values that will change based
from the user's input*/
class Main extends Component {
    constructor(props) {
        super(props);
        this.state= { //In the constructor you can define a state using this.state because you are assigning a value to it. Outside of the constructor, you must use this.setState because the object is changing.
            campsites: CAMPSITES, //The CAMPSITES Array containing information about the Campsites is declared here as an object named "campsites"
            //selectedCampsite: null, //selectedCampsite will keep track of what campsite the user selected.  null means no campsite was selected
        };
    }

//    onCampsiteSelect(campsiteId) { //This method will work whenever a campsite is selected by the user. The campsite object will get passed into this method. this.setState will change the value of the campsite into state. When selected, the campsite description will be given.
//        this.setState({selectedCampsite: campsiteId}); //Outside of the constructor, you must use this.setState because the object is changing.
//    }

    render() {
        const HomePage= () => { //Locally Scope Component: only accessible in this file, MainComponent
            return (
                <Home />
                );
            };
            
        return (
            <div>
                <Header /> {/*Calls the Header component*/}
                <Switch> {/*This Switch component is like a Switch Statement in JavaScript. The Route components represent Case in the Switch statement. The Redirect component acts as a Default statement in a JavaScript Switch statement.*/}
                    <Route path= "/home" component={HomePage} /> {/*Route any traffic to the Home page if the path "home" is selected.*/}
                    <Route exact path="/directory" render={()=> <Directory campsites={this.state.campsites} />} /> {/*The exact path will lead to the Directory Cpmponent. Information about the campsites (inside of the this.state.campsites) is given a variable name "campsites" that can be used in the Directory Component.*/}
                    <Redirect to="/home" /> {/*This Redirect component acts as a catch all, sort of like a Default statement in a JavaScript Switch statement.*/}
                {/*<CampsiteInfo campsite={this.state.campsites.filter(campsite=> campsite.id=== this.state.selectedCampsite)[0]} /> {/*Filter always returns an array, but us. CampsiteInfo component is expecting the computer to return an object, not an array, 
                which is why we are using an index ([]) to get only one value (one campsite object) from the array to the CampsiteInfo component.*/}
                {/*This will call the CampsiteInfo component into the DirectoryComponent.js*/}
                </Switch>
                <Footer /> {/*Calls/renders the Footer component*/}
            </div>
        );
    };
}

export default Main;