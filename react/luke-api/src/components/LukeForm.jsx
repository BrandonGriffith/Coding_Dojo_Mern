import React, {useState } from 'react';
import { useHistory } from "react-router-dom";

const LukeForm = () => {
    let [resource, setResource] = useState("people");
    let [id, setId] = useState(1);
    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/${resource}/${id}`);
    }

    return <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Search for:</label>
                <select name="" id="" className='form-select' onChange={(e)=>{setResource(e.target.value)}} value={resource}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">StarShips</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="">Id:</label>
                <input type="number" name="" id="" className="form-control" onChange={(e)=>{setId(e.target.value)}} value={id}/>
            </div>
            <input type="submit" value="Search" className="btn yellow mt-3" />
            </form>
        <hr/>
    </>
}
export default LukeForm;
