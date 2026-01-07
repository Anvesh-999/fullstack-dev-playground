import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1673191898695-8252d409d82c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://media.istockphoto.com/id/1746184903/photo/rainy-season-squall.jpg?s=1024x1024&w=is&k=20&c=NqnbFuoNFrnLZLijvU9q3uO-HFCWUCEM096SKI35hAw=";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <div className='CardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <i>{info.city} : {info.temp}°C</i>&nbsp;
          {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>feels_like : {info.feels_like}°C</p>
            <p>humidity : {info.humidity}%</p>
            <p>pressure : {info.pressure} hPa</p>
            <p>temp_max : {info.temp_max}°C</p>
            <p>temp_min : {info.temp_min}°C</p>
            <p>wind_speed : {info.wind_speed} m/s</p>
            <p>The weather in {info.city} is {info.weather}.</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}