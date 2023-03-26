import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Lista de Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/UserList" className="nav-link">
            Lista de Usuários
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Sobre" className="nav-link">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;