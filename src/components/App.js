import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return (
  <div>
    <NavBar />
    <Route exact path="/" Component={Home} />
    <Route exact path="/movies" Component={Movies} />
    <Route exact path="/directors" Component={Directors} />
    <Route exact path="/actors" Component={Actors} />
  </div>
  );
}

export default App;
