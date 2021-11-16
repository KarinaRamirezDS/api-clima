import React, {useEffect, useState} from "react";
//Router
import { useHistory, useParams } from "react-router-dom";
import Header from "../../Components/Custom/Header/Header";
import CiudadInfo from "../../Components/Home/CiudadInfo/CiudadInfo"
const WeatherInformation = () => {
  //hooks router
  const history = useHistory();
  

  const {name} = useParams();
 

 //State
 const [ciudad, setCiudad] = useState(null);

  //Funciones
  const handleHistory = () => {
    //console.log(history);
    history.goBack();
  };


  useEffect(() => {
    const handleCityInformation = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
      const result = await response.json()
      setCiudad(result);
      console.log(result)
    }
    handleCityInformation();
  }, [])

 

  return (
    <div>
      <Header />

    <div className="text-center">
    {ciudad ? <CiudadInfo 
    name={ciudad?.name} 
    temp={ciudad?.main?.temp}
    tempMin={ciudad?.main?.temp_min}
    tempMax={ciudad?.main?.temp_max}
    cloud={ciudad?.clouds?.all}
    imagen={ciudad?.weather[0].icon}
    descrip={ciudad?.weather[0].description}
    humedad={ciudad?.main.humidity}

    
    /> : null} 
    </div>
      
      
      <button onClick={handleHistory}>Regresar</button>
    </div>
  );
};

export default WeatherInformation;
