import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    let [title,setTitle] = useState("");
    let [price,setPrice] = useState("");
    let [description,setDescription] = useState("");
    let [errorHandler, setErrorHandler] = useState({})

    const createProduct = (e)=>{
        e.preventDefault();
        let info = {title, price, description};
        axios.post("http://localhost:8000/api/products/new",info)
            .then( response => {
                console.log(response);
                setTitle("");
                setPrice("");
                setDescription("");
                props.setSubmitHandler(!props.submitHandler);
                if(response.data.error) {setErrorHandler(response.data.error.errors); return};
                setErrorHandler({});
            })
            .catch( error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
                    <p className="text-danger">{errorHandler.title?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" className="form-control" onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
                    <p className="text-danger">{errorHandler.price?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                    <p className="text-danger">{errorHandler.description?.message}</p>
                </div>
                <input type="submit" className='btn btn-success m-3' value="Create a new product" />
            </form>
        </div>
    );
}
export default ProductForm;
