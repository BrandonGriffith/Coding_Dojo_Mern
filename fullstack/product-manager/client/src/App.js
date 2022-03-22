import './App.css';
import { BrowserRouter, Switch, Route 
} from "react-router-dom";
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import ShowProduct from './components/ShowProduct';


function App() {
  return (
    <BrowserRouter>
    <div className="App container col-4">
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <ProductForm/>
          <Products/>
        </Route>
        <Route exact path="/product/:id">
          <ShowProduct/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
