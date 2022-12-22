import React from 'react'
import  CardsItem  from './CardsItem.js'

import './Cards.css'


function Cards() {
  return (
    <div className='cards-wrapper' >
      <div className='cards-container'>

        <CardsItem image='/images/img-community-services.jpg' link='' text='Insert Card Description' />
        <CardsItem image='/images/img-community-services.jpg' link='' text='Insert Card Description' />
        <CardsItem image='/images/img-community-services.jpg' link='' text='Insert Card Description' />

      </div>
    </div>
  )
}

export default Cards