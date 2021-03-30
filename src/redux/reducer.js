//No longer need this reducer.js file when combining the reducers. The configureStore.js file took over what this file does. Use configureStore.js when using Redux.
//This file is only used when you only need one reducer.

//MOVING RESPONSIBILITY FROM THE STATE FROM MAINCOMPONET.JS TO REDUCER.JS
import {CAMPSITES} from "../shared/campsites"; 
import {COMMENTS} from "../shared/comments"; //../ means that we are backing out of the Redux folder to the shared folder.
import {PARTNERS} from "../shared/partners";
import {PROMOTIONS} from "../shared/promotions";

//Redux store is the single source of truth. This means that all state data is stored in the Redux store. 
export const initialState={ //This will be the initial state of our app that we will get straight from the source data files. To access this constant from another file, we need to add the word "export" in front of the const. 
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS,
};

export const Reducer = (state= initialState, action) => { //Default function parameters so if there is no state passed in then the state gets set to the initial state object (initialState). To access this constant from another file, we need to add the word "export" in front of the const. 
    return state; //Returns the state that was passed in.
};