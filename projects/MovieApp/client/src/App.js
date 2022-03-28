import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route 
} from "react-router-dom";
import Movies from './components/Movies';
import MovieSearch from './components/MovieSearch';
import MovieTitle from './components/MovieTitle';
import MovieAddFav from './components/MovieAddFav';
import MovieRemoveFav from './components/MovieRemoveFav';
import MovieSet from './components/MovieSet';


function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState('batman');
  const [favList, setFavList] = useState([]);
  const [favUpdate, setFavUpdate] = useState(false);

  return (
    <BrowserRouter>
    <div className="App container-fluid movie-app">
      <h1>Movie App Project MERN</h1>
      <Switch>
        <Route exact path="/">
          <div className='row d-flex justify-content-between'>
            <MovieTitle title="Movies" tech="(OMDb API)"/>
            <MovieSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
          </div>
          <Movies 
          movieList={movieList} setMovieList={setMovieList}
          searchValue={searchValue} setSearchValue={setSearchValue}
          EditFav={MovieAddFav} favUpdate={favUpdate} setFavUpdate={setFavUpdate}
          />
          <div className='row d-flex justify-content-between'>
            <MovieTitle title="Favorites" tech="(Express RESTful api)"/>
          </div>
          <MovieSet 
          favList={favList} setFavList={setFavList}
          searchValue={searchValue} setSearchValue={setSearchValue}
          EditFav={MovieRemoveFav} favUpdate={favUpdate} setFavUpdate={setFavUpdate}
          />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
