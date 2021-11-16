import React from 'react'
//style
import "./WeatherForm.styles.css"

const WeatherForm = ({handleCity, handleSearchWeather}) => {
    return (
       
        <form  action="" onSubmit={(e) => handleSearchWeather(e)}
        className="w-1/2 m-auto mt-10 text-center">
            <input 
            type="text" 
            placeholder="City Name" 
            onChange={({ target }) => handleCity(target)} 
            required
            className="p-4 w-2/4 search-input"
            />
            <input type="submit" value="Search"
           
            className="p-4 w-1/3 tablet:w-3/4  bg-gray-700 hover:bg-blue-200 text-white search-input-button"></input>
        </form>
        
    )
}

export default WeatherForm
