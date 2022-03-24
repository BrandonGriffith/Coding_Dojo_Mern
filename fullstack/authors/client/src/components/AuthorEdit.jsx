import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const AuthorEdit = () => {
    const {id} = useParams();
    const history = useHistory();
    let [authorInfo, setAuthorInfo] = useState({});
    let [errorHandler, setErrorHandler] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response=>{
                console.log(response);
                if(response.data.error) setErrorHandler(response.data.error.errors);
                setAuthorInfo(response.data.results);
            })
            .catch(error=> {
                console.log("your have an error!!!",error);
            });
            },[id])

    const setValues = (e)=>{
        setAuthorInfo({...authorInfo, 
            [e.target.name]: e.target.value
        });
    }

    const editauthor = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${id}`, authorInfo)
            .then(response=>{
                console.log(response);
                if (response.data.error) {setErrorHandler(response.data.error.errors); return};
                setErrorHandler({});
                history.push('/');
            })
            .catch(error=> console.log(error));
    }

    return (
        <div>
            <Link to="/" className='btn btn-success m-2'>
                Home
            </Link>
            <p>Editing: {id}</p>
            <form onSubmit={editauthor}>
                <div className="form-group">
                    <label htmlFor="">firstName:</label>
                    <input type="text" name="firstName" id="" className="form-control" onChange={setValues} 
                    value={authorInfo.firstName?authorInfo.firstName:""} />
                    <p className="text-danger">{errorHandler.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">lastName:</label>
                    <input type="text" name="lastName" id="" className="form-control" onChange={setValues} 
                    value={authorInfo.lastName?authorInfo.lastName:""} />
                    <p className="text-danger">{errorHandler.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">quote:</label>
                    <input type="text" name="quote" id="" className="form-control" onChange={setValues} 
                    value={authorInfo.quote?authorInfo.quote:""} />
                    <p className="text-danger">{errorHandler.quote?.message}</p>
                </div>
                <Link to="/" className='btn btn-danger m-2'>
                Cancel
                </Link>
                <input type="submit" className='btn btn-success m-3' value="Edit author" />
            </form>
        </div>
    );








}
export default AuthorEdit;