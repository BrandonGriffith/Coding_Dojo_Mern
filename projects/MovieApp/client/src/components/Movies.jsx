import React, { useEffect } from 'react';
import axios from 'axios';


const Movies = (props) => {
    const url = "http://www.omdbapi.com/?s=";
    const apiKey = process.env.REACT_APP_OMDD_API_KEY;
    const searchValue = props.searchValue;
    const setMovieList = props.setMovieList;
    const EditFav = props.EditFav;



    useEffect(() => {
        axios.get(`${url + searchValue + apiKey}`)
            .then(response => {
                console.log(response);
                if(response.data.Search){
                    setMovieList(response.data.Search);
            }})
            .catch(error => console.log(error));
        }, [searchValue,setMovieList,apiKey])


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
export default Movies;
