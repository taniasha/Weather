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
  
   let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo);
   }
  return (
    <>
       <div style={{textAlign:'center',paddingTop:'20px'}}>
         <div style={{border:'1px black solid', display:'inline-block',padding:'40px'}}>
           <h1>WeatherApp</h1>
           <SearchBox updateInfo={updateInfo}/>
         </div>
         <InfoBox info={weatherInfo}/>
       </div>
    </>
  );
}
