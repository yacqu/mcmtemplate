import React from 'react'
import ImageTitle from '../generic/imagetitle/ImageTitle'
import CardsItem from '../generic/cards/CardsItem'
import VideoShow from '../generic/videoshow/VideoShow';
import HomeDonation from './video_section/HomeDonation';



function Home() {

  const videoPath = "/videos/vid-homepage.mp4"

  const imageMap = {
    "Image 1": {
      path: '/images/img-homepage-top.jpg' ,
      link: "/",
      description: "This is the first image",
    },
    "Image 2": {
      path: '/images/img-homepage-top.jpg' ,
      link: "/",
      description: "This is the second image",
    },
    "Image 3": {
      path: '/images/img-homepage-top.jpg' ,
      link: "/",
      description: "This is the third image",
    },
  };
  return (
    <>
      <div style={
        {backgroundImage:'linear-gradient(180deg, #f7f7f7, #969494)',
        padding:'10px 20px 10px'}}>
      </div> 
      <ImageTitle imagelink='/images/img-homepage-top.jpg' imagetext='Welcome to MCM Phoenix' />
      <div className='cards-wrapper' >
        <div className='cards-container'>
          {Object.entries(imageMap).map(([key, value]) => (
            <CardsItem image={value.path} link={value.link} text={value.description} /> 
          ))}

            { /*<CardsItem image='/images/img-community-services.jpg' link='' text='Insert Card Description' /> */}
          </div>
      </div>
      <div style={{padding:'0px 0px 0px',}}>
          <VideoShow title='Recent Updates' path={videoPath} />
      </div>

      <div>
        <HomeDonation />

      </div>
    </>
  )
}

export default Home