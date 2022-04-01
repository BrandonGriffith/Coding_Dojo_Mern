import './App.css';
import { BrowserRouter,Switch,Route } 
from "react-router-dom";
import React, {useState} from 'react';
import SignIn from './components/User/SignIn';
import Dashboard from './components/User/Dashboard';
import Posts from './components/Post/Posts';
import PostForm from './components/Post/PostForm';
import SideBars from './components/Menu/SideBars';
import User from './components/Menu/User';
import UpdateUser from './components/User/UpdateUser';



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
            <SideBars loggedInUser={loggedInUser} User={User}/>
            <Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <PostForm loggedInUser={loggedInUser} submitHandler={submitHandler} 
            setSubmitHandler={setSubmitHandler}/>
            <Posts submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
          </Route>
          <Route exact path = "/edit/profile">
            <UpdateUser loggedInUser={loggedInUser}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
