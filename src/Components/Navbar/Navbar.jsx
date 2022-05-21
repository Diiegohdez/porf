import React, { useState } from "react";
import "./navbar.css"


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  

  return (
    <div className="Navbar">
        <div className="NavbarLeft">
            <img src="" alt="Logo" className="NavbarImg" />
        </div>
        <div >
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                  <a href="/#" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                  Inicio
                 </a>
                 </li>
                <li>
                  <a href="/#"  activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                  Informacion
                  </a>
                  </li>
                <li>
                  <a href="/#"  activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                  Portafolio
                  </a>
                  </li>
                <li><a href="/#"  activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                  Contacto
                  </a>
                  </li>
                
            </ul>
            <div className="nav-icon" onClick={handleClick}>
                 <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar