import React from 'react'
import ImageTitle from '../generic/imagetitle/ImageTitle'
import CardsItem from '../generic/cards/CardsItem'



function Home() {
  const cardImage = ['/images/img-homepage-top.jpg', '/images/img-homepage-top.jpg', '/images/img-homepage-top.jpg']
  const cardLink = ['/', '/', '/']
  const cardText = ['Text1', 'Text2', 'Text3']
  return (
    <>
      <div style={
        {backgroundImage:'linear-gradient(180deg, #f7f7f7, #969494)',
        padding:'10px 20px 10px'}}></div> 
      
      <ImageTitle imagelink='/images/img-homepage-top.jpg' imagetext='Welcome to MCM Phoenix' />

      <div className='cards-wrapper' >
        <div className='cards-container'>
          {cardImage.map((image, index) => (
            <CardsItem image={image} link={cardLink[index]} text={cardText[index]} />
          ))}
          { /*<CardsItem image='/images/img-community-services.jpg' link='' text='Insert Card Description' /> */}
        </div>
    </div>

    </>
  )
}

export default Home