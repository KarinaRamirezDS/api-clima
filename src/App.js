import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation";

//Layout 
//import MainLayout from "./Components/Layouts/MainLayout";
function App() {
  //JSX

  return (
    <BrowserRouter>
      <Switch>
     
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/weather/:name" exact>
          <WeatherInformation />
        </Route>

      
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
