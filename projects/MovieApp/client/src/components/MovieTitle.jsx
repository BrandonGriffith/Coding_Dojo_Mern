import React from "react";


const MovieTitle = (props) => {

    return (
        <div className="col col-sm-4 d-flex">
            <h1>{props.title}</h1>
            <h1>{props.tech}</h1>
        </div>
    )
}
export default MovieTitle;
