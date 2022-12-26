import React from 'react'
import CardLoadItem from '../cardloading/CardLoadItem'

import '../cardloading/CardLoad.css'
import ImageTitle from '../generic/imagetitle/ImageTitle'

function Donate() {
  return (
    <>
        <div>
            <ImageTitle />
        </div>
        <div className="donate-cards-wrapper">
            <div className="donate-cards-container">
                <CardLoadItem imgLink="/images/img-card-1.jpg" alt="card-img" title="New Parking Lot Construction" 
                    text="Please Donate To Help Reach The Goal" progress="20" 
                    button='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E'/>
                <CardLoadItem imgLink="/images/img-card-2.jpg" alt="card-img" title="New Bathroom Construction" 
                    text=" Please Donate To Help Reach The Goal" progress="80" 
                    button='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E'/>
                <CardLoadItem imgLink="/images/img-card-3.png" alt="card-img" title="New Playground Construction" 
                    text=" Please Donate To Help Reach The Goal" progress="60" 
                    button='https://www.paypal.com/donate/?hosted_button_id=LZGPUFLUNZC8E' />
                
            </div>
        </div>
    </>
  )
}

export default Donate