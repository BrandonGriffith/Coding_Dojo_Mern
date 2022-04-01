import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const UpdateUser = (props) => {
    const loggedInUser = props.loggedInUser;
    const history = useHistory();
    let [UserInfo, setUserInfo] = useState(loggedInUser);
    let [errorHandler, setErrorHandler] = useState({});

    useEffect(() => {
        if (Object.keys(UserInfo).length === 0){
            history.push('/dashboard');
        }
    }, [history, UserInfo])

    const setValues = (e)=>{
        setUserInfo({...UserInfo, 
            [e.target.name]: e.target.value
        });
    }

    const editUser = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/users/update/${loggedInUser._id}`, UserInfo)
            .then(response=>{
                console.log(response);
                if (response.data.error) {setErrorHandler(response.data.error.errors); return};
                setUserInfo({[e.target.name]: e.target.value});
                setErrorHandler({});
                history.push('/dashboard');
            })
            .catch(error=> console.log(error));
    }

    return (
        <div className="postSize">
            <Link to="/dashboard" className='btn btn-success m-2'>
                back to the home page
            </Link>
            <h1>edit {UserInfo.firstName}'s details bellow</h1>
            <form onSubmit={editUser}>
                <div className="form-group">
                    <label htmlFor="">First name:</label>
                    <input type="text" name="firstName" id="" className="form-control" onChange={setValues} 
                    value={UserInfo.firstName?UserInfo.firstName:""} />
                    <p className="text-danger">{errorHandler.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" id="" className="form-control" onChange={setValues} 
                    value={UserInfo.lastName?UserInfo.lastName:""} />
                    <p className="text-danger">{errorHandler.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">imgUrl:</label>
                    <input type="text" name="imgUrl" id="" className="form-control" onChange={setValues} 
                    value={UserInfo.imgUrl?UserInfo.imgUrl:""} />
                    <p className="text-danger">{errorHandler.imgUrl?.message}</p>
                </div>
                <Link to="/dashboard" className='btn btn-danger m-2'>
                Cancel
                </Link>
                <input type="submit" className='btn btn-success m-3' value="Edit User" />
            </form>
                {UserInfo.imgUrl !== "" ?
                    <img src={UserInfo.imgUrl} alt="" height="400px"></img>
                    : null
                }
        </div>
    );
}
export default UpdateUser;
