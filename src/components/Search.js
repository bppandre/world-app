import React from 'react'

export default function Search({q,setQ}) {

    return (
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
    )
}
