import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const AuthorShow = () => {
    const {id} = useParams();
    const history = useHistory();
    let [authorInfo, setAuthorInfo] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{setAuthorInfo(response.data.results);
            })
            .catch(error=>{console.log(error)
            })
    }, [id])

    const deleteauthor = ()=>{
        axios.delete(`http://localhost:8000/api/authors/delete/${id}`)
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
            <h3>{authorInfo.title}</h3>
            <p>author Id: {authorInfo._id}</p>
            <p>author name: {authorInfo.firstName} {authorInfo.lastName}</p>
            <p>author quote: {authorInfo.quote}</p>
            <button onClick = {deleteauthor} className='btn btn-danger m-3'>
                Delete
            </button>
        </div>
    );
}
export default AuthorShow;