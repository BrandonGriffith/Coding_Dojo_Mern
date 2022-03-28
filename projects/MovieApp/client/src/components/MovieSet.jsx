import React from "react";


const MovieSet = (props) => {
    const EditFav = props.EditFav;
    
    return(
        <>
        <div className="row">
            <div className="d-flex justify-content-start">
                {
                    props.movieList.map((movie, index) => 
                        <div key={index} className="image-container m-3">
                            <img src={movie.Poster} height="300px" alt={"movie poster"}/>
                            <div onClick={()=>props.favClick(movie)} 
                                className='overlay d-flex align-items-center justify-content-center'>
                                <EditFav/>
                            </div>
                        </div>)
                }
            </div>
        </div>
        </>
    )
}
export default MovieSet;
