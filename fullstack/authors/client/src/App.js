import './App.css';
import { BrowserRouter, Switch, Route 
} from "react-router-dom";
import Authors from './components/Authors';
import { useState } from 'react';
import AuthorForm from './components/AuthorForm';
import AuthorEdit from './components/AuthorEdit';
import AuthorShow from './components/AuthorShow';

function App() {
  let [submitHandler, setSubmitHandler] = useState(false);
  return (
    <BrowserRouter>
    <div className="App container col-5">
      <h1>Authors</h1>
    <Switch>
        <Route exact path="/">
          <Authors submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
        </Route>
        <Route exact path="/new">
          <AuthorForm submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
        </Route>
        <Route exact path="/edit/:id">
          <AuthorEdit/>
        </Route>
        <Route exact path="/author/:id">
          <AuthorShow/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
