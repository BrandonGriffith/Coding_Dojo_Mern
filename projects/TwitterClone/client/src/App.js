import './App.css';
import { BrowserRouter,Switch,Route } 
from "react-router-dom";
import React, {useState} from 'react';
import SignIn from './components/User/SignIn';
import Dashboard from './components/User/Dashboard';
import Posts from './components/Post/Posts';
import PostForm from './components/Post/PostForm';


function App() {
  let [loggedInUser, setLoggedInUser] = useState({});
  let [submitHandler, setSubmitHandler] = useState(false);
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path = "/">
            <SignIn/>
          </Route>
          <Route exact path = "/dashboard">
            <Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <PostForm loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} 
            submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
            <Posts loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}
            submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
