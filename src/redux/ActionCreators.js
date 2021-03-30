import * as ActionTypes from "./ActionTypes"; //Asterix (*) acts as a wildcard that lets us import all the named exports from the actionTypes.js file at once.  
//import {CAMPSITES} from "../shared/campsites";
import {baseUrl} from "../shared/baseUrl";



//Creating a fake server (pretty much a timer) that will delay our data from going to the reducer by 2000 miliseconds. 
//We are doing this because our data is local and isn't on a server, we aren't sending data to a server.
export const fetchCampsites=() => dispatch => { //There are two arrows because we nested an arrow function inside of an arrow function.
    dispatch(campsitesLoading());

    return fetch(baseUrl + "campsites") //give Fetch a url (we are using the baseUrl) and campsites as that is the location of the campsites data
        .then(response => { //response.ok will be set to true
            if(response.ok){
                return response;
            } else {
                    const error= new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response= response;
                    throw error;
                }
            },
            error => {
                const errMess= new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json()) /*A call to Fetch will return a promise.
        .json() method to convert the response from json to JavaScript and that Javascript will be the array of campsites.*/
        .then(campsites=> dispatch(addCampsites(campsites)))
        .catch(error=> dispatch(campsitesFailed(error.message)));
    
    // setTimeout(()=> {
   //     dispatch(addCampsites(CAMPSITES));
   // }, 2000); //Delay for 2000 miliseconds
};

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
});

export const fetchComments= () => dispatch => {
    return fetch(baseUrl + "comments")
    .then(response => { //response.ok will be set to true
        if(response.ok){
            return response;
        } else {
                const error= new Error(`Error ${response.status}: ${response.statusText}`);
                error.response= response;
                throw error;
            }
        },
        error => {
            const errMess= new Error(error.message);
            throw errMess;
        }
    )
        .then(response => response.json()) //Shows if the request was successful.
        .then(comments=> dispatch(addComments(comments)))//Send the comments to the Redux store
        .catch(error => dispatch(commentsFailed(error.message)));
    };

export const commentsFailed= errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

/*export const postComments= comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});*/

//export const postComment= (campsiteId, rating, author, text) => ({
//    type: ActionTypes.ADD_COMMENT, //This lets us access ADD_COMMENT export that we made in ActionTypes.js
//    payload: {
//        campsiteId: campsiteId, //When identifier is the same as its value, we could write this line as just campsiteId,
//        rating: rating,
 //       author: author,
 //       text: text,
  //  }
//});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {
    
    const newComment = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json",
        }})
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log("post comment", error.message);
            alert("Your comment could not be posted\nError: " + error.message);
        });
};

export const fetchPromotions=() => dispatch => { //There are two arrows because we nested an arrow function inside of an arrow function.
    dispatch(promotionsLoading());

    return fetch(baseUrl + "promotions") //give Fetch a url (we are using the baseUrl) and promotions as that is the location of the promotions data
    .then(response => { //response.ok will be set to true
        if(response.ok){
            return response;
        } else {
                const error= new Error(`Error ${response.status}: ${response.statusText}`);
                error.response= response;
                throw error;
            }
        },
        error => {
            const errMess= new Error(error.message);
            throw errMess;
        }
    )    
    .then(response => response.json()) /*A call to Fetch will return a promise.
    .json() method to convert the response from json to JavaScript and that Javascript will be the array of campsites.*/
    .then(promotions=> dispatch(addPromotions(promotions)))
    .catch(error=> dispatch(promotionsFailed(error.message))); 
};

export const promotionsLoading= () => ({  //This means this is our standard action creator that returns an action object and nothing else.
    type: ActionTypes.PROMOTIONS_LOADING //This was dispatched from Fetch Campsites.
}); 


export const promotionsFailed= errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});


export const addPromotions= promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions //promotions is an array, which is the payload
});