import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokeApi = () => {
    let [pokeList, setPokeList] = useState([]);
    let [pokeSearch, setPokeSearch] = useState("");

    useEffect(() => {
        console.log("running");
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then((response) => {console.log(response.data.results); setPokeList(response.data.results)})
        .catch((err)=>{
            console.log("error when fetching. something went wrong. ", err )
        }
        )},[])

    return(
        <>
        <h1>Search for a pokemon!!!: <input onChange={(e)=>setPokeSearch(e.target.value.toLowerCase()) } type="text" placeholder='Search...'/></h1>
        {
            pokeList.filter((pokeObj)=>{
                return pokeObj.name
                .toLowerCase()
                .includes(pokeSearch);
            }).map((pokeObj, index) => {
                return <div key={index}>
                    <h1>{pokeObj.name}</h1>
                    </div>
                })
        }
        </>
    )
}
export default PokeApi;