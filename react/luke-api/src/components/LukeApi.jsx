import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const LukeApi = () => {
    const {obj, num} = useParams();

    let [lukeInfo, setLukeInfo] = useState([]);
    let [resource, setResource] = useState("people");
    let [id, setId] = useState("1");
    let [anErr, setAnErr] = useState(false);

    useEffect(()=>{
        console.log("running");
        if(num!==undefined){
            setResource(obj);
            setId(num);
            resource = obj;
            id = num;
        }
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response)=>{
                setLukeInfo(response.data);
                console.log(response.data);
            })
            .catch((_err)=>{
                console.log("error");
                setAnErr(true);
            }
            )},[])

    const submitHandler = (e)=>{
        e.preventDefault();
        window.location = `/${resource}/${id}`;
    }

    const anErrorNo = () => {
        return (
            <div>
            <h3>"These aren't the droids you're looking for"</h3>
            <img src="https://www.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg" width="300px" alt="" />
            </div>
        );
    }


    return (
        <>
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
            <input type="submit" value="Search" className="btn btn-success mt-3" />
            </form>

        <hr/>

            {
                <>
                    {anErr === true?anErrorNo():null}
                    <h3>{Object.keys(lukeInfo)[0]}: {lukeInfo[Object.keys(lukeInfo)[0]]}</h3>
                    <h3>{Object.keys(lukeInfo)[1]}: {lukeInfo[Object.keys(lukeInfo)[1]]}</h3>
                    <h3>{Object.keys(lukeInfo)[2]}: {lukeInfo[Object.keys(lukeInfo)[2]]}</h3>
                    <h3>{Object.keys(lukeInfo)[3]}: {lukeInfo[Object.keys(lukeInfo)[3]]}</h3>
                    <h3>{Object.keys(lukeInfo)[4]}: {lukeInfo[Object.keys(lukeInfo)[4]]}</h3>
                </>
            }
        </>
    );
}

export default LukeApi;