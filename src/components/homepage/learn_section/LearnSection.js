import React from 'react'

import './LearnSection.css'

function LearnSection() {
  return (
        <div className='main-component-container' > {/* flex */}
            <div className='main-article-wrapper'>
                <article className='main-article-container'> {/* flex */}
                    
                    {/* Copy from here for title to paragraph */}
                    <div className='main-article-title'> {/* title */}

                        <h1>
                        Learn More About the Masjid
                        </h1>
                        <hr style={{borderTop:'1px dotted #8c8b8b'}}></hr>
                    </div>
                    
                    <div className='main-article-text-content'>
                        <p className='main-article-text-content-p' >
                            It was 1993 when people in Phoenix felt need for second masjid due 
                            to growth in Muslim Population. Due to restrained resources a warehouse 
                            building was rented. In 1995 Owner ordered building to be vacated and 
                            search was started for a land or building for second Masjid.
                        </p>
                        <p className='main-article-text-content-p'>
                            A piece of land was spotted in a very poor neighborhood and everybody 
                            who saw it exclaimed who will come here to pray. Hazrat Ibraheem must 
                            have had same sentiments when Allah asked him to build KABA. Any way 
                            the land was bought acquired but there was no building on it, so a 
                            discarded building was purchased from a school and moved on property. 
                        </p >
                        <p className='main-article-text-content-p'>
                            But Allah has better plans for the place and soon refugees from 
                            Afghanistan, Burma, Somalia and Sudan were inhabited by state and 
                            population continues to grow. Now around approximately 15000 Muslims 
                            living in five miles radius. The building structure massively 
                            inadequate for prayers and for their children to get Islamic education.
                        </p>
                        <div className='home-learn-btn-container'>
                            <button  className='home-learn-btn'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    {/* Copy from here for title to paragraph */}
                    {/* Copy from here for image 
                    <div className='main-article-text-content-image'> 
                        <img 
                        src='/images/img-infographic-1.png'
                        alt='generic image' 
                        />
                        <h1>image description</h1>
                    </div>*/}
                    {/* Copy from here for image */}

                    

                    
                </article>
            </div>
        </div>
  )
}

export default LearnSection