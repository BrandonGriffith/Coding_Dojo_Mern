import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Products = (props) => {
    const [productList, setProductList] = useState([]);
    const history = useHistory();


    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(response=>{
                console.log(response);
                setProductList(response.data.results);
            })
            .catch(error => console.log(error));
    },[props.submitHandler])


    const deleteProduct = (id)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(response=>{
                console.log(response);
                history.push("/");
                props.setSubmitHandler(!props.submitHandler);
            })
            .catch(error=>console.log(error));
    }


    return (
        <div>
            {
                productList.map((productObj)=>{
                    return (
                        <div className="card" key = {productObj._id}>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link to={`/product/${productObj._id}`}>
                                        {productObj.title}
                                    </Link>
                                </h2>
                                <p className="card-text">
                                    Price: ${productObj.price}
                                </p>
                                <p className="card-text"> 
                                    Description: {productObj.description}
                                </p>
                                <Link to={`/product/edit/${productObj._id}`} className='btn btn-info m-3'>Edit {productObj.title}</Link>
                                <button onClick = {()=>deleteProduct(productObj._id)} className='btn btn-danger m-3'>
                                    Delete {productObj.title}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Products;
