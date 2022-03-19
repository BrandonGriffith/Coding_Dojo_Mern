import React, {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const LukeForm = () => {
    let [resource, setResource] = useState("");
    let [id, setId] = useState("");
    let [lukeInfo, setLukeInfo] = useState([]);
    let history = useHistory();

    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then((response)=>{
                setLukeInfo(response.data);
                setResource("people");
                setId("1");
                console.log(response.data);
            })
            .catch((err)=>{
                console.log("error", err);
            }
            )},[])

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`);
    }

    return <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Search for:</label>
                <select name="" id="" className='form-select' onChange={(e)=>{setResource(e.target.value)}} value={resource}>
                    {
                        Object.keys(lukeInfo).map((value, key)=>{
                            return(
                                <option key={key} value={value}>{value}</option>
                            )
                        })
                    }
                    {/* <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">StarShips</option> */}
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Id:</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setId(e.target.value)}} value={id}/>
            </div>
            <input type="submit" value="Search" className="btn yellow mt-3" />
            </form>
        <hr/>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/veh-ia-1751-1576604159.jpg"
        width="30%;" className="float" alt=""/>
    </>
}
export default LukeForm;
