import { useState } from "react";
import Navbar from './Navbar';
import Searchbox from './Searchbox';
import InformationBox from './InformationBox'

export default function WeatherApp (){

    const [weatherInfo,setWeatherInfo] = useState({
        
            city:"Ratnagiri",
            feelsLike: 31.89,
            humidity: 92,
            temp: 27.31,
            tempMax: 27.31,
            tempMin: 27.31,
            weather:"moderate rain",
        });

        let updateInfo = (newInfo) => {
            setWeatherInfo(newInfo);
        };
        
    return(
        <div  className="weatherApp">
            <Navbar />
            <Searchbox updateInfo={updateInfo}/>
            <InformationBox info={weatherInfo}/>
        </div>
    )
}