import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const token = localStorage.getItem("token")

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>

      <Link to="/comments">Comments</Link>

      <Link to="/logout">Logout</Link>


      {/* <Link to="/landingpage">Marketing</Link> */}
     

    </nav>
  );
}

export default NavBar;
