import React from 'react'
import styled from 'styled-components'

import Hero from '../figma/Hero'
import ServiceSection from '../figma/ServiceSection'
import PrayerTimes from '../prayertimeswidget/PrayerTimes'

function Dev() {
  return (
    <>
      <FullPageContainer>
        
        <Hero />
        <ServiceSection />



      </FullPageContainer>
    </>
  )
}

export default Dev

const FullPageContainer = styled.div`
  background-color: #C0C9C0;

`;