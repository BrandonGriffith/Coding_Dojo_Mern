import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const RegistrationForm = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [imgUrl, setImgUrl] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");
    let [formErrors, setFormErrors] = useState({})
    const history = useHistory();


    const register = (e) => {
        e.preventDefault();
        let formInfo = { firstName, lastName, email, imgUrl, password, confirm };
        axios.post("http://localhost:8000/api/users/register", formInfo, { withCredentials: true })
            .then(res => {
                console.log("res after registering", res);
                if (res.data.errors) {
                    setFormErrors(res.data.errors);
                } else {
                    history.push("/dashboard");
                }
            })
            .catch(err => {
                console.log("err after register", err);
            })
    }
    return (
        <div>
            <h3>Register</h3>
            <form onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" id="1" className='form-control w-50 centerMe' onChange={(e) => setFirstName(e.target.value)} />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" id="2" className='form-control w-50 centerMe' onChange={(e) => setLastName(e.target.value)} />
                    <p className="text-danger">{formErrors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" id="3" className='form-control w-50 centerMe' onChange={(e) => setEmail(e.target.value)} />
                    <p className="text-danger">{formErrors.email?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">imgUrl</label>
                    <input type="text" name="imgUrl" id="4" className='form-control w-50 centerMe' onChange={(e) => setImgUrl(e.target.value)} />
                    <p className="text-danger">{formErrors.imgUrl?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="5" className='form-control w-50 centerMe' onChange={(e) => setPassword(e.target.value)} />
                    <p className="text-danger">{formErrors.password?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirm" id="6" className='form-control w-50 centerMe' onChange={(e) => setConfirm(e.target.value)} />
                    <p className="text-danger">{formErrors.confirm?.message}</p>
                </div>
                <input type="submit" value="Register" className="btn btn-primary mb-2" />
            </form>
        </div>
    );
};
export default RegistrationForm;
