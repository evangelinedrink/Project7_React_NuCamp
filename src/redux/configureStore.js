import {createStore} from "redux";
import {Reducer, initialState} from "./reducer"; //In the same folder as reducer.js, so we only need ./

export const ConfigureStore= () => { 
    const store= createStore(
        Reducer, //Pass in the Reducer and initialState function from reducer.js
        initialState
    );
    return store; //Function will return the store variable
}