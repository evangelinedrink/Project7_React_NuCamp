import * as ActionTypes from "./ActionTypes"; //Asterix (*) acts as a wildcard that lets us import all the named exports from the actionTypes.js file at once.  

export const addComment= (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT, //This lets us access ADD_COMMENT export that we made in ActionTypes.js
    payload: {
        campsiteId: campsiteId, //When identifier is the same as its value, we could write this line as just campsiteId,
        rating: rating,
        author: author,
        text: text,
    }
})