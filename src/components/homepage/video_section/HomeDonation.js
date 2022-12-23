import React from 'react'

import './HomeDonation.css'

function HomeDonation() {
  return (
    <div className='home-donation-wrapper'>
        <div className='home-donation-content-wrapper'>
            <div className='home-donation-container'>
                <div className='home-donation-title-container'>
                    <h1 className='home-donation-title-h1'>
                        Help MCM Build A House of Worship
                    </h1>
                    <h5 className='home-donation-title-h5'>
                        We've recently launched a fundraising campaign in Gofundme
                    </h5>

                </div>
                <div className='home-donation-content'>
                    <div className='home-donation-content-right'>
                        <img className='home-donation-content-right-img' src='/images/img-home-donation.jpg' />
                    </div>
                    <div className='home-donation-content-left'>
                        <div className='home-donation-content-left-container'>
                            <h6 className='home-donation-content-left-h6'>
                                Join Us in Making a Difference
                            </h6>
                            <p className='home-donation-content-left-p ' >
                                We're raising money to benefit Muslim Community Mosque, and any donation
                                will help make an impact. Thanks in advance for your contribution to 
                                this cause that means so much to us.
                            </p>
                            <h6 className='home-donation-content-left-h6-amount'>
                                $250,000
                            </h6>
                            <h7 className='home-donation-content-left-h7'>
                                Donation Needed
                            </h7>
                            <button  className='home-donation-btn'>
                                Donate
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomeDonation