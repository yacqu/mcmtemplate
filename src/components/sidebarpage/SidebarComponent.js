import React from 'react'

import {Menu} from 'semantic-ui-react';
import { SideBarItem } from './SideBarItem';

import './SidebarComponent.css'
import './SideBar.scss';

export function MainContentComponent() {
  return (
    <div className='main-component-container' > {/* flex */}
        
        <div className='main-article-wrapper'>
            <article className='main-article-container'> {/* flex */}
                
                {/* Copy from here for title to paragraph */}
                <div className='main-article-title'> {/* title */}
                    <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                    <h1>
                        Insert Title
                    </h1>
                    <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                </div>
                
                <div className='main-article-text-content'>
                    <p>
                        The Quran program at MCM Phoenix Mosque is designed specifically 
                        for young people, with a focus on helping them understand the 
                        teachings of Islam and how to apply them in their daily lives.
                    </p>
                    <p>
                        Through interactive lessons and discussions, participants will learn 
                        about the history, language, and meanings of the Quran, as well as its 
                        role in shaping the beliefs and values of Muslims.
                    </p>
                    <p>
                        In addition to providing a strong foundation in the Quranic sciences, 
                        the program also emphasizes the importance of living a complete and 
                        balanced Islamic life
                    </p>
                </div>
                {/* Copy from here for title to paragraph */}

                {/* Copy from here for image */}
                <div className='main-article-text-content-image'>   {/* flex */}
                    <img 
                    src='/images/img-infographic-1.png'
                    alt='generic image' 
                    />
                    <h1>image description</h1>
                </div>
                {/* Copy from here for image */}

            </article>
        </div>
    </div>
  )
}


/* https://productioncoder.com/build-youtube-in-react-part-4/ */
export function SidebarComponent() {
  return (
    <Menu className='side-nav'>
        {/*...*/}
        <SideBarItem highlight={true}  label='Home' link='/'/>
        <SideBarItem label='Page 2' link='/' />
        <SideBarItem label='Page 3' link='/' />
        <SideBarItem label='Page 4' link='/' />
    </Menu>
  );
}