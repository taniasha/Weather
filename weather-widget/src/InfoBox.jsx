import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


export default function InfoBox(info) {
    const Img_url="https://media.istockphoto.com/id/1324413691/photo/beautiful-sky-with-white-clouds.jpg?s=1024x1024&w=is&k=20&c=0drX95w3sBrcbXrQIQtfT0Dzz44QwA2TNK3VP1HDIjM=";
    
  return (
    <>
    <div className="infobox">
        <h2>WeatherInfo</h2>
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img" height="140" image={Img_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Temperature = {info.temp}&deg;C</div>
                        <div>Humidity = {info.humidity}</div>
                        <div>Min Temp = {info.tempMin}&deg;C</div>
                        <div>Max Temp = {info.tempMax}&deg;C</div>
                        <div>The weather feels like {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    </div>
    </>
  )
}
