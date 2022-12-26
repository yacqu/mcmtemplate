import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './PrayerTimes.css';

function PrayerTimes() {

    const [apiData, setApiData] = useState(null);
    const desiredPrayers = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const desiredDate = ['readable']

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United Arab Emirates&method=8');
            {/* console.log(response); */}
            console.log(response);
            setApiData(response);
        }
        fetchData();
    }, []);

    const fajr = apiData?.data?.timings?.Fajr;


    return (
        <>
            <div className='prayer-times-widget-wrapper'>
                <div className='prayer-times-widget-container'>
                    <div className='prayer-times-widget'>
                        <div className='prayer-times-widget-header-title'>
                            <h1 className='prayer-times-widget-header-title-h1'>
                                Prayer Times
                            </h1>
                            <div className='prayer-times-widget-sub-header-title'>
                                <h6 className='prayer-times-widget-sub-header-title-h6'>
                                    Phoenix, Arizona
                                </h6>
                                <h7 className='prayer-times-widget-sub-header-title-h6'>
                                    {apiData && Object.entries(apiData.data.data.date).map(([key, value]) => {
                                    if (desiredDate.includes(key)) {
                                    return (
                                        <span key={key}>{value}</span>

                                    )}})}
                                </h7>
                            </div>
                
                        </div>
                          
                        <ul className='prayer-times-widget-ul'>
                            {apiData && Object.entries(apiData.data.data.timings).map(([key, value]) => {
                                if (desiredPrayers.includes(key)) {
                                return (  
                                <div>                                        
                                    <li key={key} className='prayer-times-widget-item'>
                                        <h2 className='prayer-times-widget-item-title' key={key}>
                                            {key}
                                        </h2> 
                                        {value}
                                    </li>
                                    <hr></hr>
                                </div> 
                                )}}
                            )}
                            

                        </ul>
                              
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrayerTimes