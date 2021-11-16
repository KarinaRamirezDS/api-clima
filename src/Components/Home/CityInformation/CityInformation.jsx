import React from "react";

//Router
import { useHistory } from "react-router-dom";
import "./CityInformation.styles.css";
const CityInformation = ({ name, clima, imagen }) => {
  //hooks router
  const history = useHistory();

  //Funciones
  const handleHistory = () => {
    //console.log(history);
    history.push(`/weather/${name}`);
  };
  

  return (
    <div className="contenido tablet:w-3/4" >
    <div className="card h-1/4 m-auto mt-10 text-center tablet:w-3/4 " >
      <div className="items center w-1/2 m-auto mt-10 text-center tablet:w-3/4 ">
      <h2 className="text-2xl text-white">{name}</h2> 
      <img  className="items center" src={`http://openweathermap.org/img/wn/${imagen}@2x.png`}/>
      

      <h2 className="text-2xl text-white" p-2>{Math.round(clima)}<sup>&deg;C</sup></h2>
      
      </div>
      <div className="card-body flex justify-between items-center p-10 center w-1/2 h-1/4">
      <button className="more" onClick={handleHistory}>More</button>
    
      </div>
      
    </div>
    </div>
    
  );
};

export default CityInformation;
