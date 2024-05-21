import React from 'react'
import "./index.css"

const InfoCard = ({ title, points = [] }) => {
    return (<>
    <div className='info-card-container'>
        <h4>{title}</h4>
        <ul>
            {points.map(io => (<>
            <li className='mt-1'>{io}</li>
            </>))}
        </ul>
    </div>
    </>)
}

export default InfoCard