import React from 'react'
import './serviceComponent.css'
import DIAMOND from '../../assets/images/diamond.png'

function ServiceComponent ({ title, description }) {
  return <div className='serviceComponent'>
    <div className="image-and-title">
        <img src={DIAMOND} alt="" />
        <h1>{title}</h1>
    </div>
    <p>{description}</p>
  </div>
}

export default ServiceComponent
