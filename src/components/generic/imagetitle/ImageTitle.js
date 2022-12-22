import React from 'react'
import './ImageTitle.css'

function ImageTitle(props) {
  return (
    
    <div className="imagetitle-page-image-wrapper">
        <div style={{backgroundImage:`url(${props.imagelink})`}} className="imagetitle-page-image-container">
            <div className='imagetitle-page-image-overlay'>
                <h1 className="imagetitle-page-image-title">{props.imagetext}</h1>
            </div>
        </div>
    </div>
  )
}

export default ImageTitle