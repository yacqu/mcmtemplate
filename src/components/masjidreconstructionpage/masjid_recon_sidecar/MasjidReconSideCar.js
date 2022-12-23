
import React, { useState, useEffect } from 'react';

import './MasjidReconSideCar.css'


function MasjidReconSideCar() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch('http://api.aladhan.com/v1/timingsByCity?city=Phoenix&country=United States of America&method=8');
        const json = await response.json();
        setData(json);
      };
  
    useEffect(() => {
      fetchData();
    }, []);

    const fajrTime = data.data.timings.Fajr;
    const dhuhrTime = data.data.timings.Dhuhr;
    const asrTime = data.data.timings.Asr;
    const maghribTime = data.data.timings.Maghrib;
    const ishaTime = data.data.timings.Isha;

    const prayerTimes = [fajrTime, dhuhrTime, asrTime, maghribTime,ishaTime];

    console.log(JSON.stringify(prayerTimes))
 


   


  return (
    <div className='sidecar-page-wrapper'>
        <div className='sidecar-page-container'>
            <div className='sidecar-left-container'>
                <p>
                    {prayerTimes.map((item, value)=>(
                        <h1>{item}</h1>
                    ))}

                </p>
                
            </div>

            <div className='sidecar-right-container'>

            </div>

        </div>
    </div>
  )
}

export default MasjidReconSideCar