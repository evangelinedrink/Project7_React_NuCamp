import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'; //The ../ tells the computer to go down one directory, then it will go to the shared folder and then the campsites.js

//This MainComponent.js is a container component that sits below the App.js file.
class Main extends Component {
    constructor(props) {
        super(props);
        this.state= { //In the constructor you can define a state using this.state because you are assigning a value to it. Outside of the constructor, you must use this.setState because the object is changing.
            campsites: CAMPSITES,
            selectedCampsite: null, //selectedCampsite will keep track of what campsite the user selected.  null means no campsite was selected
        };
    }

    onCampsiteSelect(campsiteId) { //This method will work whenever a campsite is selected by the user. The campsite object will get passed into this method. this.setState will change the value of the campsite into state. When selected, the campsite description will be given.
        this.setState({selectedCampsite: campsiteId}); //Outside of the constructor, you must use this.setState because the object is changing.
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteId=> this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite={this.state.campsites.filter(campsite=> campsite.id=== this.state.selectedCampsite)[0]} /> {/*Filter always returns an array, but us. CampsiteInfo component is expecting the computer to return an object, not an array, 
                which is why we are using an index ([]) to get only one value (one campsite object) from the array to the CampsiteInfo component.*/}
                {/*This will call the CampsiteInfo component into the DirectoryComponent.js*/}
            </div>
        );
    };
}

export default Main;