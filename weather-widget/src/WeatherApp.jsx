import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Hyderabad",
        feels_like: 20.84,
        humidity: 50,
        pressure: 1014,
        temp: 21.34,
        temp_max: 21.34,
        temp_min: 21.34,
        weather: "clear sky",
        wind_speed: 1.76,
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp" style={{textAlign:"center", marginTop:"20px"}}>
            <h1>Weather Widget</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}