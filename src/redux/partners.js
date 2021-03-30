import {PARTNERS} from "../shared/partners"; //importing the CAMPSITES array
//import * as ActionTypes from "./ActionTypes";

export const Partners= (state= PARTNERS, action) => { /*{isLoading: "true", errMess: null, parter: []}, action) => { /*Reducer function to handle each part of the state. This is a named export.
All reducers take 2 parameters (previous state/current state which is state=CAMPSITES, second parameter is the action object).*/
    switch(action.type) { //Check for the type of action
        /*case ActionTypes.ADD_PARTNERS:
            return{...state, isLoading: false, errMess: null, partners: action.payload};
        case ActionTypes.PARTNERS_LOADING:
            return{...state, isLoading:true, errMess: null, partners: []};
        case ActionTypes.PARTNERS_FAILED:
            return{...state, isLoading:false, errMess: action.payload};*/
        default: //No action type has been defined.
            return state;
    }
};