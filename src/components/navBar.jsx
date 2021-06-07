import React, { Component } from "react";
import "../styles/navBar.css";
import logo from "../Mathiologo3.svg";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="main-header clearfix" role="header">
          <Link to="/">
            <div className="logo">
              <img
                className="logo-image"
                src={logo}
                alt="Mathio Logo"
                width="50"
                height="55"
              />
              <em>Mathio</em>
            </div>
          </Link>
          <nav id="menu" className="main-nav" role="navigation">
            <ul className="main-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/problemselect">Student</NavLink>
              </li>
              <li>
                <NavLink to="/teacher">Teacher</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default NavBar;
