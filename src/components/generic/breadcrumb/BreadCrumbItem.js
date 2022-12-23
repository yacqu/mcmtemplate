import React from 'react'
import './BreadCrumbs.css'

function BreadCrumbItem(props) {
  return (
    <a className='bc-list-a' href={props.link}>
        {props.title}
    </a>
  )
}

export default BreadCrumbItem