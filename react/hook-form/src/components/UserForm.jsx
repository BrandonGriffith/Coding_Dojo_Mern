import React, { useState } from  'react';

const UserForm = (props) =>{
    const [userForm, setUserForm ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordCheck: ""
    })
    const changeHandler = (e)=>{
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <h1>Hook Form</h1>
            <form className='container col-5'>
                <div className="form-group">
                    <label htmlFor="">First Name:</label>
                    <input type="text" name="firstName" id="" className="form-control" onChange={changeHandler}/> 
                {
                    userForm.firstName.length<2 && userForm.firstName.length>0? 
                    <p className='text-danger'>Name must be at least 2 characters</p> : null
                }
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name:</label>
                    <input type="text" name="lastName" id="" className="form-control" onChange={changeHandler}/> 
                {
                    userForm.lastName.length<2 && userForm.lastName.length>0? 
                    <p className='text-danger'>Last name must be at least 2 characters</p> : null
                }
                </div>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" id="" className="form-control" onChange={changeHandler}/>
                {
                    userForm.email.length<2 && userForm.email.length>0? 
                    <p className='text-danger'>Email must be at least 2 characters</p> : null
                }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" id="" className="form-control" onChange={changeHandler}/> 
                {
                    userForm.password.length<8 && userForm.password.length>0? 
                    <p className='text-danger'>Password must be at least 8 characters</p> : null
                }
                </div>
                <div className="form-group">
                    <label htmlFor="">Password again:</label>
                    <input type="password" name="passwordCheck" id="" className="form-control" onChange={changeHandler}/> 
                {
                    userForm.password !== userForm.passwordCheck && userForm.passwordCheck.length>0? 
                    <p className='text-danger'>Password must match.</p> : null
                }
                </div>
                <input type="submit" value="Hook Form" className="btn btn-success mt-3" />
            </form>
            <hr/>
            <p>First Name: {userForm.firstName} </p>
            <p>Last Name: {userForm.lastName}</p>
            <p>Email: {userForm.email}</p>
            <p>Password: {userForm.password}</p>
            <hr/>
        </>
    )
}
export default UserForm;