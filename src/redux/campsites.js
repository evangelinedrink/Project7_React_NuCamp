//import {CAMPSITES} from "../shared/campsites"; //importing the CAMPSITES array
import * as ActionTypes from "./ActionTypes";//We will be getting the CAMPSITES array from an action.

export const Campsites= (state={
    isLoading: true,
    errMess: null,
    campsites: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_CAMPSITES:
            return{...state, isLoading: false, errMess: null, campsites: action.payload};
        case ActionTypes.CAMPSITES_LOADING:
            return{...state, isLoading: true, errMess: null, campsites: []};
        case ActionTypes.CAMPSITES_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};


//export const Campsites= (state= CAMPSITES, action) => { {/*Reducer function to handle each part of the state. This is a named export.
//All reducers take 2 parameters (previous state/current state which is state=CAMPSITES, second parameter is the action object).*/}
//    switch(action.type) { //Check for the type of action
//        default: //No action type has been defined.
//            return state;
//    }
//};
