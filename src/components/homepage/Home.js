import React from 'react'
import ImageTitle from '../generic/imagetitle/ImageTitle'
import CardsItem from '../generic/cards/CardsItem'
import VideoShow from '../generic/videoshow/VideoShow';
import HomeDonation from './video_section/HomeDonation';
import LearnSection from './learn_section/LearnSection';

import './Home.css'
import BreadCrumbs from '../generic/breadcrumb/BreadCrumbs';


function Home() {

  const videoPath = "/videos/vid-homepage.mp4"

  const breadCrumbMap = {
    'About': '/about'
  }

  const imageMap = {
    "Image 1": {
      path: '/images/img-card-1.jpg' ,
      link: "/",
      description: "Spacious Men & Women Prayer Hall",
    },
    "Image 2": {
      path: '/images/img-card-2.jpg' ,
      link: "/",
      description: "Dedicated Area for Mother & Infants",
    },
    "Image 3": {
      path: '/images/img-card-3.png' ,
      link: "/",
      description: "Extended Parking",
    },
    "Image 4": {
      path: '/images/img-card-4.jpg' ,
      link: "/",
      description: "Refrence Library",
    },
  };
  return (
    <>
      <div style={
        {backgroundImage:'linear-gradient(180deg, #f7f7f7, #969494)',
        padding:'10px 0px 1px'}}>
      <ImageTitle imagelink='/images/img-homepage-top.jpg' imagetext='Welcome to MCM Phoenix' />
      </div> 

      <div>
        <BreadCrumbs breadCrumbMap={breadCrumbMap} />
      </div>

      <div className='home-page-spacer'>
          <div className='home-page-spacer-container'>
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
            <LearnSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home