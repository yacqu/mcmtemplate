import React from 'react'
import './HomeImageTitle.css'

function HomeImageTitle() {
  return (
    <div className="home-page-image-wrapper">
        <div className="home-page-image-container">
            <div className='home-page-image-overlay'>
                <img src="/images/img-homepage-top.jpg" alt="My Image" className="home-page-image" />
                <h1 className="home-page-image-title">Welcome to MCM Phoenix</h1>
            </div>
        </div>
    </div>
  )
}

export default HomeImageTitle