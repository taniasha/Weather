import React, { useState } from 'react';
import "./App.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox(updateInfo) {
    // const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY =  "30e64bec6d797fcfc429f8368741fce8";

    let getWeatherInfo = async()=>{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feelsLike,
        }
        console.log(result);
        return result;
    };

    let[city,setCity] = useState("");

    let handleChange=(e)=>{
        setCity(e.target.value);
    }

    let handleSubmit= async(e)=>{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
  return (
    <>
     <div className="searchbox">
       <form onSubmit={handleSubmit} >
          <TextField id="city" label="City Name" variant="outlined" required
          value={city} onChange={handleChange}/>
          <br />
          <Button variant="contained" type="submit">Search</Button>
       </form>
    </div>
    </>
  );
}
