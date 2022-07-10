import React, { useState } from "react";
import "./app.css";
import { Link } from "react-router-dom";


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav" >
        <h2 className="nav__brand">
        Maazjnr
        </h2>
      <ul className={active} onClick={active} >

        <li className="nav__item" >
          <Link style={{color: 'white'}} className="nav__link" to='/'>
             <h2> Home</h2>
          </Link>
        </li>

        <li className="nav__item">
          <Link style={{color: 'white'}} className="nav__link" to='/about' >
             <h2> About Me</h2>
          </Link>
        </li>

        <li className="nav__item">
          <Link style={{color: 'white'}} className="nav__link" to='/project' >
              <h2>Projects</h2>
          </Link>
        </li>

        <li className="nav__item">
          <Link style={{color: 'white'}} className="nav__link" to='/contact'>
              <h2>Contact</h2>
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>

  );
}

export default Navbar;

// if (active === "nav__menu") {
//   setActive("nav__menu nav__active");
// } else setActive("nav__menu");


// if (icon === "nav__toggler") {
//   setIcon("nav__toggler toggle");
// } else setIcon("nav__toggler");
// };