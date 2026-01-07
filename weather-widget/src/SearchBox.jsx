import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error,setError]=useState(false);

    let getWeather=async()=>{
       try{let response=await fetch(`${import.meta.env.VITE_API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        
        let data=await response.json();
        console.log(data);
        let res={
            city:city,
            temp:data.main.temp,
            temp_max:data.main.temp_max,
            temp_min:data.main.temp_min,
            humidity:data.main.humidity,
            pressure:data.main.pressure,
            feels_like:data.main.feels_like,
            weather:data.weather[0].description,
            wind_speed:data.wind.speed,
        }
        console.log(res);
        return res;
       }catch(err){
        throw err;
       }
    }

    let handleChange=(evn)=>{
        setCity(evn.target.value);
    }
    let handleSubmit= async (evn)=>{
        try{evn.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeather();
        updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>&nbsp;
            <br /><br />    
            <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>Error fetching data. Please try again.</p>}
            </form>
        </div>
    )
}