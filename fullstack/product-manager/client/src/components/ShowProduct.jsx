import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const ShowProduct = () => {

    let {id} = useParams();
    let [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{setProductInfo(response.data.results);
            })
            .catch(error=>{console.log(error)
            })
    }, [id])
    return (
        <div>
            <h3>{productInfo.title}</h3>
            <p>Product Id: {productInfo._id}</p>
            <p>Product Price: {productInfo.price}</p>
            <p>Product Description: {productInfo.description}</p>
        </div>
    );
}
export default ShowProduct;