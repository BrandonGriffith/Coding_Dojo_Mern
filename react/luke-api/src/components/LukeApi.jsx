import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const LukeApi = () => {
    const {resource, id} = useParams();

    let [lukeInfo, setLukeInfo] = useState([]);
    let [anErr, setAnErr] = useState(false);

    useEffect(()=>{
        setAnErr(false);
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then((response)=>{
                setLukeInfo(response.data);
                console.log(response.data);
            })
            .catch((err)=>{
                console.log("error", err);
                setAnErr(true);
                setLukeInfo([]);
            }
            )},[resource, id])

    const anError = () => {
        return (
            <div>
            <h3>"These aren't the droids you're looking for"</h3>
            <img src="https://www.boredpanda.com/blog/wp-content/uploads/2020/12/2-5fe5b1f770d61__700.jpg" 
            width="300px" alt="" />
            </div>
        );
    }

    return <>
            {
                <>
                    {anErr === true?anError():null}
                    {Object.entries(lukeInfo).slice(0,7).map(([key, value]) => (
                        <h3 key={key}>{key}: {value}</h3>
                    ))}
                    {/* <h3>{Object.keys(lukeInfo)[0]}: {lukeInfo[Object.keys(lukeInfo)[0]]}</h3>
                    <h3>{Object.keys(lukeInfo)[1]}: {lukeInfo[Object.keys(lukeInfo)[1]]}</h3>
                    <h3>{Object.keys(lukeInfo)[2]}: {lukeInfo[Object.keys(lukeInfo)[2]]}</h3>
                    <h3>{Object.keys(lukeInfo)[3]}: {lukeInfo[Object.keys(lukeInfo)[3]]}</h3>
                    <h3>{Object.keys(lukeInfo)[4]}: {lukeInfo[Object.keys(lukeInfo)[4]]}</h3> */}
                </>
            }
        </>
}
export default LukeApi;
