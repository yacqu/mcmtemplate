import React from 'react'
import styled from 'styled-components'
import CallAction from '../figma/CallAction'
import DonateSection from '../figma/DonateSection'

import Hero from '../figma/Hero'
import ServiceSection from '../figma/ServiceSection'
import PrayerTimes from '../prayertimeswidget/PrayerTimes'

function Dev() {
  return (
    <>
      <FullPageContainer>
        
        <Hero />
        <ServiceSection />
        <DonateSection />
        <CallAction />



      </FullPageContainer>
    </>
  )
}

export default Dev

const FullPageContainer = styled.div`
  background-color: #C0C9C0;

`;