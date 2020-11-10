import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const token = localStorage.getItem("token");

function NavBar() {
    
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <nav className="navbar">
    <Link to="/">Home</Link>
      {token && <Link to="/comments">Comments</Link>}
      {token && <Link to="/logout" onClick={refreshPage}>Logout</Link>}

      {/* <Link to="/landingpage">Marketing</Link> */}
    </nav>
  );
}

export default NavBar;
