import React, { useEffect } from 'react';
import axios from 'axios';


const Movies = (props) => {
    const url = "http://www.omdbapi.com/?s=";
    const apiKey = process.env.REACT_APP_OMDD_API_KEY;
    const searchValue = props.searchValue;
    const setMovieList = props.setMovieList;
    const EditFav = props.EditFav;
    const favUpdate = props.favUpdate;
    const setFavUpdate = props.setFavUpdate;


    useEffect(() => {
        axios.get(`${url + searchValue + apiKey}`)
            .then(response => {
                console.log(response);
                if(response.data.Search){
                    setMovieList(response.data.Search);
            }})
            .catch(error => console.log(error));
        }, [searchValue,setMovieList,apiKey])


    const addMovie = (Poster,Title,Type,Year,imdbID)=>{
        let info = {Poster,Title,Type,Year,imdbID};
        axios.post("http://localhost:8000/api/movies/new",info)
            .then( _response => {
                // console.log(response);
                setFavUpdate(!favUpdate);
            })
            .catch( error => console.log(error));
        }


    return(
        <>
        <div className="row">
            <div className="d-flex justify-content-start">
                {
                    props.movieList.map((movie, index) => 
                        <div key={index} className="image-container m-3">
                            <img src={movie.Poster} alt={"movie poster"}/>
                            <div onClick={()=>addMovie(movie.Poster,movie.Title,movie.Type,movie.Year,movie.imdbID)} 
                                className='overlay d-flex align-items-center justify-content-center'>
                                <EditFav/>
                            </div>
                        </div>)
                }
            </div>
        </div>
        <p className='d-flex justify-content-center inline-block'>-----( Hold Shift to Scroll )-----</p>
        </>
    )
}
export default Movies;
