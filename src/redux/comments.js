//import {COMMENTS} from "../shared/comments"; //importing the CAMPSITES array
import * as ActionTypes from "./ActionTypes";//Update its part of the state when the Add Comment action is dispatced to the store. This means we need to import from the actiontypes module by using the wildcard (*) syntax. 

export const Comments= (state= {errMess: null,comments: []}, action) => { /*Reducer function to handle each part of the state. This is a named export.
All reducers take 2 parameters (previous state/current state which is state=CAMPSITES, second parameter is the action object).*/
    switch(action.type) { //Check for the type of action
        case ActionTypes.ADD_COMMENTS:
            return{...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:    
            const comment= action.payload; //Action.payload is an object
            //We don't need lines 14-15 because json server adds the comment id for us.
            //comment.id= state.comments.length; //The state is in the comments area
            //comment.date= new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)}; //Concat method is an array method that lets us attach a new content to an array by creating a new array, it doesn't change the original array.
            //This means a new array will be created with a new comment that will be returned to the Redux store.
        default: //No action type has been defined.
            return state;
    }
};