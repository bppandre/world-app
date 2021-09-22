import React,{ useEffect, useState } from 'react';
import MyContext from './MyContext';

export default function MyProvider({children}) {

    const [countries, setCountries] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        let url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(
        (result) => {
            setLoaded(true);
            setCountries(result);
        },
        (error) => {
            setLoaded(true);
            setError(error);
        }
        );

    }, [])

    return (
        <MyContext.Provider value={{countries:countries}}>
            {children}
        </MyContext.Provider>
    )
}
