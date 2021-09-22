import {useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import './App.css';
import Card from './components/Card';
import MyContext from './components/MyContext';
import Search from './components/Search';

function App() {

  const [q, setQ] = useState('');

  function search(items, query){
    return items.filter( (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1 )
  }

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

  if(error){
    return <div>An error has occured</div>
  }else if(!loaded){
    return <div>Loading ...</div>
  }else{
    return (
      <Router>
        <Switch>

          <Route path="/about/:id">
            <Details />
          </Route>

          <Route path="/">
            <div className="App">
              <Search q={q} setQ={setQ} />
              <div className='content'>  
                {search(countries,q).map((country) => <Card name={country.name} flag={country.flag} />) }
              </div>
            </div>
          </Route>

        </Switch>
      </Router>
    );
  }

}


function Details(){

  let {id} = useParams();

  return(
    <MyContext.Consumer>
      
      <div>
        <div> hello.hello you are  looking at {id}</div>
      </div>
    </MyContext.Consumer>
  )
}

export default App;
