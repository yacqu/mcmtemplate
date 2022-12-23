import React from 'react'


import './VideoShow.css'

function VideoShow(props) {
  return (
    <div className='video-show-wrapper'>
      <div className='video-show-title-container'>
        <h1 className='video-show-title'>
        {props.title}
        </h1>
      </div>
      
        <div className='video-show-container'>
            <video className='video-show-video' controls src={props.path}>
            Your browser does not support the video element.
            </video>
        </div>
    </div>
  )
}

export default VideoShow