import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""} >
            <li>Acceuil</li>
          </NavLink>

          <NavLink to="/coup-de-coeaur" className={(nav) => nav.isActive ? "nav-active" : ''}>
            <li>Coup de Coeur</li>
          </NavLink>
        </ul>
      </nav>
      <h1>React Movies</h1>
    </div>
  );
};

export default Header;
