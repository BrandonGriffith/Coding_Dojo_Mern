import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

const EditProduct = () => {
    const {id} = useParams();
    const history = useHistory();
    let [productInfo, setProductInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{
                console.log(response);
                setProductInfo(response.data.results);
            })
            .catch(error=> console.log(error));
            },[id])

    const setValues = (e)=>{
        setProductInfo({...productInfo, 
            [e.target.name]: e.target.value
        });
    }

    
    
    const editProduct = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, productInfo)
            .then(response=>{
                console.log(response);
                history.push('/');
            })
            .catch(error=> console.log(error));
    }


    return (
        <div>
            <p>Editing: {id}</p>
            <form onSubmit={editProduct}>
                <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input type="text" name="title" id="" className="form-control" onChange={setValues} 
                    value={productInfo.title?productInfo.title:"1"} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Price:</label>
                    <input type="number" name="price" id="" className="form-control" onChange={setValues} 
                    value={productInfo.price?productInfo.price:1} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description:</label>
                    <input type="text" name="description" id="" className="form-control" onChange={setValues} 
                    value={productInfo.description?productInfo.description:"1"} />  
                </div>
                <input type="submit" className='btn btn-success m-3' value="Edit Product" />
            </form>
        </div>
    );

}
export default EditProduct;