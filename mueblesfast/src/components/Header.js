import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>MueblesFAST</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">Quiénes somos</a></li>
          <li><a href="#store">Tienda</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#offers">Ofertas</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;