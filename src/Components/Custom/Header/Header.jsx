import React from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
    return (
        <header className="h-16 bg-gray-900 flex justify-between items-center">
           
            
            <h2 className=" ml-10 text-3xl text-white border-yellow-500"> <FontAwesomeIcon icon={faCloudMoon} /> WEATHER</h2>
            
        </header>
    )
}

export default Header
