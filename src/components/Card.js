import React from 'react'
import './card.css';

export default function Card({flag,name}) {
    return (
        <div className='card'>
            <div className="card-image">
                <img src={flag} alt={name} />
            </div>
            <div className='card-content'>
                {name}
            </div>
        </div>
    )
}
