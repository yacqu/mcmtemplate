import React from 'react'

import './Cards.css'

function CardsItem(props) { 
  return (
    <a className='card-link-a' href={props.link} >
      <div className='card-content-container'>
        <div className='card-content'>
          <img className='card-image'
          src={props.image} alt='' />
          <p className='card-description-text'>
            {props.text}
          </p>
        </div>
      </div>
    </a>
    )
}
export default CardsItem