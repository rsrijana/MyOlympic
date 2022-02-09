import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavBar.css";
import olympic from '../../src/images/olympic.png'
// import logo from '../Images/logo.jpg'

function NavBar() {
  const [click, setClick] = useState(false);
  const history = useHistory();
  function comment()
  {
    alert("Are you sure, you want to logout??");
    history.push("/Register");
  }

  const handleClick = () => setClick(!click);
  return (
      <nav className="navbar">
        <div className="nav-container" >
          <img src= {(olympic)} height={60} width={200}/>
          <NavLink exact to="/" className="nav-logo">
            <h6> Olympic 2022</h6>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink  
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li> */}
            <i className="fa fa-cog" aria-hidden="true" onClick={comment}></i>
          </ul>
          
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;
