import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="header-container">
        <Link to="/" className="logo">VitaLoop</Link>
        <nav>
          <a href="/#features">Özellikler</a>
          <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
