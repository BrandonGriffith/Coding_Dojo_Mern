import React, {useState} from 'react';

const PokeApi = () => {
    let [pokeList, setPokeList] = useState([]);

    const getPoke = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then((response) => {return response.json()})
        .then((response) => {console.log(response.results); setPokeList(response.results)})
        .catch((err)=>{
            console.log("error when fetching. something went wrong. ", err )
        })
    }
    return(
        <>
        <button onClick={getPoke} className="btn btn-success m-3">Click me to get the Pokemon!!!</button>
        {
            pokeList.map((pokeObj, index) => {
                return <div key={index}>
                    <h1>{pokeObj.name}</h1>
                </div>
            })
        }
        </>
    )
}
export default PokeApi;