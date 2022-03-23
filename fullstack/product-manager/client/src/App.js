import './App.css';
import { BrowserRouter, Switch, Route 
} from "react-router-dom";
import ProductForm from './components/ProductForm';
import Products from './components/Products';
import ShowProduct from './components/ShowProduct';
import { useState } from 'react';
import EditProduct from './components/EditProduct';


function App() {
  let [submitHandler, setSubmitHandler] = useState(false);
  return (
    <BrowserRouter>
    <div className="App container col-4">
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <ProductForm submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
          <Products submitHandler={submitHandler} setSubmitHandler={setSubmitHandler}/>
        </Route>
        <Route exact path="/product/:id">
          <ShowProduct/>
        </Route>
        <Route exact path="/product/edit/:id">
          <EditProduct/>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
};
export default App;