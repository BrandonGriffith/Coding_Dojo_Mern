import React from "react";
import { Link } from "react-router-dom";


const User = (props) => {
    const loggedInUser = props.loggedInUser;


    return (
        <>
        <img src={loggedInUser.imgUrl} className="profilePic" alt="profile pic"/>
        <h3>{loggedInUser.firstName} {loggedInUser.lastName}</h3>
        <Link to="/edit/profile" className='btn btn-secondary m-1'>
                Edit Profile
            </Link>
        </>
    )
}
export default User;
