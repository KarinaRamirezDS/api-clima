import React from 'react'
import { useHistory } from "react-router-dom";

import "./CiudadInfo.styles.css";
const CiudadInfo = (props) => {


    const history = useHistory();

    //Funciones
    const handleHistory = () => {
        //console.log(history);
        history.goBack();
      };
    
    

    const{name,temp,tempMin,tempMax,cloud,descrip,imagen,humedad} = props;

    return (
        <div className="contenido">
            <div className="card">
            <div className="contenido">
                <h2 className="text-2xl text-white">{name}</h2> 
                <img  src={`http://openweathermap.org/img/wn/${imagen}@2x.png`}/>
                <h2 className="text-2xl text-white" p-2>{Math.round(temp)}<sup>&deg;C</sup></h2>
                <h2 className="text-2xl text-white" p-2> Minimum temperature:  {Math.round(tempMin)}<sup>&deg;C</sup></h2>
                <h2 className="text-2xl text-white" p-2> Maximum temperature:  {Math.round(tempMax)}<sup>&deg;C</sup></h2>
                <h2 className="text-2xl text-white">Description: {descrip}</h2> 
                <h2 className="text-2xl text-white">Humidity: {humedad}</h2>
                <h2 className="text-2xl text-white">Cloud: {cloud}</h2>
            
      
             
            </div>
           
            <button className="more"  onClick={handleHistory}>Regresar</button>
            </div>
        </div>



 
    )
}

export default CiudadInfo
