import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <React.Fragment>
    <div>
     <NavBar />
     <switch>
     <Route path="/movies">
       <movies />
     </Route>
     <Route path="/directors">
        <Directors />
     </Route>
     <Route path="/actors">
        <Actors />
     </Route>
     <Route exact path="/">
        <Home />
    </Route>
    </switch>
  </div>
  </React.Fragment>
}

export default App;
