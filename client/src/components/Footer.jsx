import React from 'react';
import Logo from '../img/logo.png';
import SDG from  '../img/sdg17.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
          <Link to='/'>
            <img src={Logo} alt=""/>
          </Link>
      </div>
      

      <span>
        <b>Made by </b>
        <a href="https://github.com/GLB-Blog" className="footer-link">GLB-Blog</a>
      </span>
    </footer>
  );
};

export default Footer;
