import React from "react";
import { useParams } from "react-router";

function RanRoute() {
    const { id, backColor} = useParams();


    return (
        <div style = {{backgroundColor: backColor===undefined?"white": `${backColor} `}}>
            {
            isNaN(id)? 
                <h1>The word is {id}</h1> : <h1>The number is {id}</h1>
            }
        </div>
    );
}

export default RanRoute;