import LukeApi from './components/LukeApi';
import LukeForm from './components/LukeForm';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App container col-3">
      <h1>Star Wars</h1>
      <h2>LukeApi</h2>
      <LukeForm/>
      <Switch>
        <Route exact path = "/:resource/:id">
          <LukeApi/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;
