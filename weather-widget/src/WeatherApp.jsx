import React from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';  

export default function WeatherApp() {
  const[weatherInfo,setWeatherInfo] = useState({
 
        city:"Delhi",
        feelsLike:24.08,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
  });
  
  const updateInfo = (newInfo) => {  
    setWeatherInfo(newInfo);  
  };  
  return (
    <>
       <div style={{textAlign:'center',paddingTop:'20px'}}>
         <div>
           <h1 style={{fontSize:"45px",fontWeight:'800'}}>WeatherApp</h1>
           <SearchBox updateInfo={updateInfo}/>
         </div>
         <InfoBox info={weatherInfo}/>
       </div>
    </>
  );
}
