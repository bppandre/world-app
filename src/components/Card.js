import React from 'react'
import { Link } from "react-router-dom";
import './card.css';

export default function Card({flag,name,id}) {
    let url = '/about/' + name;
    return (
        <Link to={url}>
        <div className='card'>
            <div className="card-image">
                <img src={flag} alt={name} />
            </div>
            <div className='card-content'>
                {name}{id}
            </div>
        </div>
        </Link>
    )
}
