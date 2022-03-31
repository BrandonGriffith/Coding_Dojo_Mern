import React, {useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Dashboard = (props) => {
    const history = useHistory();
    let setLoggedInUser = props.setLoggedInUser;


    useEffect(()=>{
        axios.get("http://localhost:8000/api/users/getloggedinuser", {withCredentials:true})
            .then(res=>{
                console.log("res when getting logged in user", res)
                if(res.data.results){
                    setLoggedInUser(res.data.results);
                }else{
                    history.push("/")
                }
            })
            .catch(err=>{
                console.log("err when gettign logged in user", err)
                history.push("/")
            })
    }, [history, setLoggedInUser])

    const logout = ()=>{
        axios.get("http://localhost:8000/api/users/logout", {withCredentials:true})
            .then(res=>{
                history.push("/")
            })
            .catch(err=>{
                console.log("errrr logging out", err)
            })
    }

    return (
        <>
            <button onClick = {logout} className="btn logout">Log Out</button>
        </>
    );
};
export default Dashboard;
