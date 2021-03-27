import * as ActionTypes from "./ActionTypes"; //Asterix (*) acts as a wildcard that lets us import all the named exports from the actionTypes.js file at once.  
import {CAMPSITES} from "../shared/campsites";
export const addComment= (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT, //This lets us access ADD_COMMENT export that we made in ActionTypes.js
    payload: {
        campsiteId: campsiteId, //When identifier is the same as its value, we could write this line as just campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
})

//Creating a fake server (pretty much a timer) that will delay our data from going to the reducer by 2000 miliseconds. 
//We are doing this because our data is local and isn't on a server, we aren't sending data to a server.
export const fetchCampsites=() => dispatch => { //There are two arrows because we nested an arrow function inside of an arrow function.
    dispatch(campsitesLoading());

    setTimeout(()=> {
        dispatch(addCampsites(CAMPSITES));
    }, 2000); //Delay for 2000 miliseconds
}

//Action Creator
export const campsitesLoading= () => ({  //This means this is our standard action creator that returns an action object and nothing else.
    type: ActionTypes.CAMPSITES_LOADING //This was dispatched from Fetch Campsites.
}); 

//Action Creator
export const campsitesFailed= errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

//Action Creator
export const addCampsites= campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites //campsites is an array, which is the payload
})
