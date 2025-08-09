import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>© {new Date().getFullYear()} My First App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
