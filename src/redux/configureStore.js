import {createStore, combineReducers, applyMiddleware } from "redux"; //We will be combining our 4 reducers
import {createForms} from "react-redux-form"; //createForms is a helper function that makes it easier to set up the reducer to update the state whenever new form values are submitted
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Campsites} from "./campsites"; //Only need ./ because this file is in the same folder as the the campsites.js file.
import {Comments} from "./comments";
import {Partners} from "./partners";
import {Promotions} from "./promotions";
import {InitialFeedback} from "./forms";
//import {Reducer, initialState} from "./reducer"; //In the same folder as reducer.js, so we only need ./ Don't need this when combining reducers.

export const ConfigureStore= () => { 
    const store= createStore(
        combineReducers({ /*Pass as objects all of our reducers that we created (partners.js, comments.js, campsites.js, and promotions.js)*/
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions,
            ...createForms({
                feedbackForm: InitialFeedback,
            }),
        }),

        applyMiddleware(thunk, logger)
        //Reducer, //Pass in the Reducer and initialState function from reducer.js <- Don't need this when combining reducers
        //initialState <- Don't need this when combining reducers
    );
    return store; //Function will return the store variable
}