import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card';

function App() {

  const [countries, setCountries] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);

  const [q, setQ] = useState('');

  useEffect(() => {

    let url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setLoaded(true);
        setCountries(result);
        console.log(result);
      },
      (error) => {
        setLoaded(true);
        setError(error);
      }
    );

  }, [])

  function search(items, query){
    return items.filter( (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 )
  }


  if(error){
    return <div>An error has occured</div>
  }else if(!loaded){
    return <div>Loading ...</div>
  }else{
    return (
      <div className="App">

        <div className='search-wrapper'>
          <label htmlFor='search-form'></label>
            <input 
              type='search' 
              id='search-form'
              name='search-form'
              className='search-input'
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder='search a country...' 
            />
          
        </div>
        
        <div className='content'>  
          {search(countries,q).map(country => <Card name={country.name} flag={country.flag} />) }
        </div>

      </div>
    );
  }

}

export default App;
