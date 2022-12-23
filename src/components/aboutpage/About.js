import React from 'react'

import ImageTitle from '../generic/imagetitle/ImageTitle'

function About() {
  return (
    <>
      <div style={{
        backgroundImage:'linear-gradient(180deg, #f7f7f7, #969494)', padding:'10px 0px 1px'}}>
            <ImageTitle imagelink='/images/img-about-top.jpg' imagetext='About MCM Phoenix' />
      </div> 
    </>
  )
}

export default About