import React, { use, useState } from 'react';
import Country from '../country/Country';
import "./countries.css";
// import { Linter } from 'eslint';

const Countries = ({ countriesPromies }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const visitedCountriesHandle = (country) => {
        console.log("handle button clicked ",country); 
        const newVisitedCountries=[...visitedCountries,country] ;
        setVisitedCountries(newVisitedCountries);

    }

    const countriesdata = use(countriesPromies);
    const countries = countriesdata.countries;

    console.log(countries);
    return (
        <>
            <h2>total Countries:{countries.length}</h2>
            <h3>total visited countries:{visitedCountries.length }</h3>
           <ol>
            {
                visitedCountries.map(country=> <li
                key={country.cca3.cca3}>
                    {country.name.common}</li>)
            }
           </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}

                        country={country}
                        visitedCountriesHandle={visitedCountriesHandle}></Country>)

                }

            </div>
        </>
    );
};

export default Countries;