import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

//Views
import Home from "./Pages/Home/Home";
import WeatherInformation from "./Pages/WeatherInformation/WeatherInformation";
import Error from "./Components/Custom/Error/Error";
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

        <Route path="*">
        <Error />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

//Props, state, hooks
