import React from "react";

//Creating a spinner that will show that the webpage is loading.
export const Loading= () => {
    return(
        <div className="col">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"/>
            <p>Loading...</p>
        </div>
    );
};