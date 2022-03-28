import React from "react";

const MovieSearch = (props) => {

    return(
        <div className="col col-sm-4">
            <input className="form-control" 
            placeholder="Search Here..." value={props.searchValue}
            onChange={(e)=>props.setSearchValue(e.target.value)}>
            </input>
        </div>
    )
}
export default MovieSearch;
