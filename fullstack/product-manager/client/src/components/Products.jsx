import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Products = () => {
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(response=>{
                setProductList(response.data.results);
            })
            .catch(error => console.log(error));
    },[])

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
                                    Price: {productObj.price}
                                </p>
                                <p className="card-text"> 
                                    Description: {productObj.description}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Products;
