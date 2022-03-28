import React from "react";


const MovieSearch = (props) => {

    return(
        <>
        <div className="col col-sm-3 m-3 d-flex">
            <h2>Search Here :</h2>
            <input className="form-control" 
            placeholder="Search Here..." value={props.searchValue}
            onChange={(e)=>props.setSearchValue(e.target.value)}
            height="2px">
            </input>
        </div>
        </>
    )
}
export default MovieSearch;
