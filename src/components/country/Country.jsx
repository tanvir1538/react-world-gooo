import React, { useState } from 'react';
import "./country.css"




const styledesign={
    color:"orange" ,
    fontSize:"15px"
};

const Country = ({country,visitedCountriesHandle}) => {
    console.log(visitedCountriesHandle);
    console.log(country);
    const [visited,setVisited]=useState(false);



    const handleVisited =()=>{
        if(visited)
        setVisited(false);
    else{
        setVisited(true);
    }
    visitedCountriesHandle(country);
    }
    return (
        <div className={`country ${visited && "country-visited"}`}>
            <img src={country.flags.flags.png}  alt={country.flags.flags.alt} />
            {/* <h2>Name:{country.flags.flags.png}</h2> */}
            <h2>Name:{country.name.common}</h2>
            <h3 style={styledesign}  >population:{country.population.population}</h3>
    <h3>Area: {country.area.area} {country.area.area >30000? "Big country":"Small country" }</h3>   
    <button onClick={handleVisited}> {visited ? "Visited":"not visited"}</button>

        </div>
    );
};

export default Country;