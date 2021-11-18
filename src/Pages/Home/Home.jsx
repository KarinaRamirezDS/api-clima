import React,{useState} from 'react'

//Components
import "./Home.styles.css";
import Header from "../../Components/Custom/Header/Header"
import WeatherForm from "../../Components/Home/Form/WeatherForm";
import CityInformation from "../../Components/Home/CityInformation/CityInformation";
import Loader from "../../Components/Custom/Loader/Loader";
import Error from "./Error";
const Home = () => {

    //State
    const [cityName, setCityName] = useState("");
    const [cityInformation, setCityInformation] = useState(null);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false)
    //Funciones 
    const handleCity = ({ value }) => {
        setCityName(value);
    };

   

    const handleSearchWeather = async e => {
        e.preventDefault();
        setCityInformation(null);

        
        setLoader(true);
        setError(true)
    try{
       // alert("Funciona");       
       
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;
        
        const response = await fetch(API);
        const result = await response.json();
      
        setLoader(false);


        if(result.cod === 200){
            setError(false)
            setCityInformation(result)
            
          }else {;
            setError(result.message);
          }
      }catch(e){
        setLoader(false)
    
      }

        
    };
  

    
    return (
        <div className="Home">

            <Header />
            <WeatherForm 
            handleCity={handleCity} 
            cityName={cityName} 
            handleSearchWeather={handleSearchWeather}
            />
          
            {loader && <Loader />}
            
          <div className="text-center">
            {cityInformation ? (
            <CityInformation 
                name={cityInformation?.name} 
                
                imagen={ cityInformation.weather[0].icon }
                clima={cityInformation?.main.temp}
                temp={cityInformation?.main?.temp}
                 />
            
            ): <Error message={error} />}
          </div>

          
            
            
            
        </div>
    )
}

export default Home
