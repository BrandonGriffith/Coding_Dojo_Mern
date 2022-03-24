import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowProduct = () => {
    const {id} = useParams();
    const history = useHistory();
    let [productInfo, setProductInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response=>{setProductInfo(response.data.results);
            })
            .catch(error=>{console.log(error)
            })
    }, [id])

    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then(response=>{
                console.log(response);
                history.push("/");
            })
            .catch(error=>console.log(error));
    }

    return (
        <div>
            <Link to="/" className='btn btn-success m-2'>
                Home
            </Link>
            <h3>{productInfo.title}</h3>
            <p>Product Id: {productInfo._id}</p>
            <p>Product Price: ${productInfo.price}</p>
            <p>Product Description: {productInfo.description}</p>
            <button onClick = {deleteProduct} className='btn btn-danger m-3'>
                Delete {productInfo.title}
            </button>
        </div>
    );
}
export default ShowProduct;