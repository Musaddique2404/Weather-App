/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InformationBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InformationBox({info}) {

    const HOT_URL = "https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg";
    const COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHx8MHx8fDA%3D";
    
    return(
        <div className="InfoBox flex justify-center h-screen mt-6">
        <div
          className="cardContainer w-full sm:w-3/4 md:w-2/3 lg:w-[33%]"  // Changed lg width
          style={{ maxWidth: "1000px", height: "500px" }}
        >
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardMedia
              sx={{ height: { xs: 200, sm: 250, md: 300 } }} // Adjusting image height for screen sizes
              image={
                info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL
              }
              title="Weather Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                {info.city}{" "}
                {info.humidity > 80 ? (
                  <ThunderstormIcon />
                ) : info.temp > 15 ? (
                  <WbSunnyIcon />
                ) : (
                  <AcUnitIcon />
                )}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="span">
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p>
                <p>Maximum Temperature = {info.tempMax}&deg;C</p>
                <p>Minimum Temperature = {info.tempMin}&deg;C</p>
                <p>
                  Weather: <i>{info.weather}</i> and Feels Like {info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
}