import React, { useEffect } from 'react';
import axios from 'axios';


const MovieSet = (props) => {
    const EditFav = props.EditFav;
    const favList = props.favList;
    const setFavList = props.setFavList;
    const favUpdate = props.favUpdate;
    const setFavUpdate = props.setFavUpdate;


    useEffect(() => {
        axios.get("http://localhost:8000/api/movies")
            .then(response => {
                console.log(response);
                setFavList(response.data.results);
            })
            .catch(error => console.log(error));
    }, [setFavList,favUpdate])


    const deleteMovie = (id) => {
        axios.delete(`http://localhost:8000/api/movies/delete/${id}`)
            .then(_response => {
                // console.log(response);
                setFavUpdate(!favUpdate);
            })
            .catch(error => console.log(error));
    }


    return(
        <>
        <div className="row">
            <div className="d-flex justify-content-start">
                {
                    favList.map((movie, index) => 
                        <div key={index} className="image-container m-3">
                            <img src={movie.Poster} height="300px" alt={"movie poster"}/>
                            <div onClick={()=>deleteMovie(movie._id)} 
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
