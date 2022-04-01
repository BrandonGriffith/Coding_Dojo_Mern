import React from "react";


const SideBars = (props) => {
    const User = props.User;
    const loggedInUser = props.loggedInUser;


    return (
        <>
        <div className="barOne">
            <User loggedInUser={loggedInUser}/>
        </div>

        <div className="barTwo">
            <p></p>
        </div>
        </>
    )
}
export default SideBars;
