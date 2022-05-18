import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/">
            <li>Acceuil</li>
          </NavLink>
          <NavLink to="/Coup de Coeur">
            <li>Coup de Coeur</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
