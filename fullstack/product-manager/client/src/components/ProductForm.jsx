import React, {useState} from 'react';
import axios from 'axios';

const ProductForm = () => {
    let [title,setTitle] = useState("");
    let [price,setPrice] = useState(null);
    let [description,setDescription] = useState("");

    const createProduct = (e)=>{
        e.preventDefault();
        let info = {title, price, description};
        axios.post("http://localhost:8000/api/products/new",info)
            .then( response => console.log(response))
            .catch( error => console.log(error));
    }

    return (
        <div>
            <form onSubmit={createProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" className="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" className="form-control" onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>
                <input type="submit" className='btn btn-success m-3' value="Create a new product" />
            </form>
        </div>
    );
}
export default ProductForm;
