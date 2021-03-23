import {PARTNERS} from "../shared/partners"; //importing the CAMPSITES array

export const Partners= (state= PARTNERS, action) => { {/*Reducer function to handle each part of the state. This is a named export.
All reducers take 2 parameters (previous state/current state which is state=CAMPSITES, second parameter is the action object).*/}
    switch(action.type) { //Check for the type of action
        default: //No action type has been defined.
            return state;
    }
};