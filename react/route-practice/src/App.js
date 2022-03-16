import './App.css';
import RanRoute from './components/RanRoute';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="App container">
        <h1>welcome!!!</h1>
        <Switch>
          <Route exact path = "/">
            <p>Home Page!!!</p>
          </Route>
          <Route exact path = "/:id/">
            <RanRoute/>
          </Route>
          <Route exact path = "/:id/:backColor">
            <RanRoute/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
