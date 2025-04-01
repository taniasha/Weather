import React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    const Img_url="https://media.istockphoto.com/id/1324413691/photo/beautiful-sky-with-white-clouds.jpg?s=1024x1024&w=is&k=20&c=0drX95w3sBrcbXrQIQtfT0Dzz44QwA2TNK3VP1HDIjM=";
    const Cold_url="https://media.istockphoto.com/id/584574690/photo/snowcapped-mountains.jpg?s=1024x1024&w=is&k=20&c=Vm7D6dNjntqunnsz8-wWP1IVv0arZgCQgDXmkElu24E=";
    const Hot_url = "https://media.istockphoto.com/id/824800468/photo/sun-on-blue-sky-with-clouds.jpg?s=1024x1024&w=is&k=20&c=WNVtjesCDPxByjPSgUZetllcBsOqvJpohuOIf9pqVWU=";
    const Rain_url = "https://media.istockphoto.com/id/1153853917/photo/lightning-in-the-dark-night-sky-over-a-lake-during-summer.jpg?s=1024x1024&w=is&k=20&c=8xzHrWuMmRSVY6dw6Z-gQJNMzl7qlZ5dt4ylVPW2GDA=";
  return (
    <>
    <div className="infobox">
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 460 }}>
            <CardActionArea>
                <CardMedia
                component="img" height="140" image={
                    info.humidity>80
                    ? Rain_url
                    : info.temp>15
                    ? Hot_url
                    : Cold_url
                }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                        info.humidity>80
                        ? <ThunderstormIcon/>
                        : info.temp>15
                        ? <SunnyIcon/>
                        : <AcUnitOutlinedIcon/>
                }
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
