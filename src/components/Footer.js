import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <p>© 2025 VitaLoop. Tüm hakları saklıdır.</p>
        <div className="footer-links">
          <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
          <a href="mailto:destek@vitaloop.com">İletişim</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
