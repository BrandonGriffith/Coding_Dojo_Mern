import './App.css';
import SignIn from './components/User/SignIn';
import Dashboard from './components/User/Dashboard';
import { BrowserRouter,Switch,Route} 
from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path = "/">
            <SignIn></SignIn>
          </Route>
          <Route exact path = "/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
