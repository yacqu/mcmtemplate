import React from 'react'

import ImageTitle from '../generic/imagetitle/ImageTitle'
import BreadCrumbs from '../generic/breadcrumb/BreadCrumbs';
import { SidebarComponent } from '../sidebarpage/SidebarComponent';
import { MainContentComponent } from '../sidebarpage/SidebarComponent';
import './articlesection/ArticleComponent.css'

function About() {

  const breadCrumbMap = {
    'About': '/about'
  }

  return (
    <>
      <div style={{
        backgroundImage:'linear-gradient(180deg, #f7f7f7, #969494)', padding:'10px 0px 1px'}}>
            <ImageTitle imagelink='/images/img-about-top.jpg' imagetext='About MCM Phoenix' />
      </div> 
      <div>
        <BreadCrumbs breadCrumbMap={breadCrumbMap} />
      </div>
      <div className='article-component-container'>
            <div className='article-component-main'>
                <MainContentComponent />
            </div>
            <div className='article-component-side'>
                <SidebarComponent />
            </div>
        </div>
    </>
  )
}

export default About