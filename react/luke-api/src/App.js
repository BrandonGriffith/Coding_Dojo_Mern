import LukeApi from './components/LukeApi';
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
      <Switch>
        <Route exact path = "/">
          <LukeApi/>
        </Route>
        <Route exact path = "/:obj/:num">
          <LukeApi/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;