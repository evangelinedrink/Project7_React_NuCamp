//import {PROMOTIONS} from "../shared/promotions"; //importing the CAMPSITES array
import * as ActionTypes from "./ActionTypes";

export const Promotions= (state= {isLoading: true,
    errMess: null,
    promotions: []}, action) => { /*Reducer function to handle each part of the state. This is a named export.
        All reducers take 2 parameters (previous state/current state which is state=CAMPSITES, second parameter is the action object)*/
    switch(action.type) { //Check for the type of action
        case ActionTypes.ADD_PROMOTIONS:
            return {...state, isLoading: false, errMess: null, promotions: action.payload};
        case ActionTypes.PROMOTIONS_LOADING:
            return {...state, isLoading:true, errMess: null, promotions: []};
        case ActionTypes.PROMOTIONS_FAILED:
            return{...state, isLoading: false, errMess: action.payload};
        default: //No action type has been defined.
            return state;
    }
};