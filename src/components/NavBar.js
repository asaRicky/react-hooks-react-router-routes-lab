import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="Navbar">
       <NavLink to="/">"Home</NavLink>
       <NavLink to="/movies">Movies</NavLink>
       <NavLink to="/directors">Directors</NavLink>
       <NavLink exact to="/actors">Actors</NavLink>
    </div>
  )};


export default NavBar;
