import React from 'react'
import {Card, ProgressBar, Button } from 'react-bootstrap'

import './CardLoad.css'



function CardLoadItem(props) {
  return (
    <Card className="card-load-container">
        <Card.Img className="card-load-img" src={props.imgLink} alt={props.alt} />
        <Card.Body className='card-load-body'>
            <Card.Title className='card-load-title'>
                {props.title}
            </Card.Title>
            <Card.Text className='card-load-text' >
                {props.text}
                
                <div className='card-load-progressbar-container'>
                    <ProgressBar striped animated className='card-load-progressbar' variant='success' label={`${props.progress}%`}
                    now={props.progress}  min={0} max={100} />
                </div>
            </Card.Text>
        </Card.Body>
        
        <Card.Footer className='card-load-footer' >
            <Button  className='card-load-footer-btn' variant="success">
                <a className='card-load-footer-btn-a' href={props.button} >Donate Now</a>
                </Button>
      </Card.Footer>
    </Card>

  )
}

export default CardLoadItem