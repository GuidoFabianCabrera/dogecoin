import React from 'react';
import Logo from '../static/dogecoinLogo.png';
import '../styles/components/Navbar.scss';
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__container">
        <div className="Navbar__logoContainer">
          <img src={Logo} alt="dogecoing " className="Navbar__logoImage" />
          <span className="Navbar__logoTitle">DOGECOIN</span>
        </div>
        <div className="Navbar__menuBurguerContainer">
          <span className="Navbar__menuBurguerTitle">MENÚ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="Navbar__menuBurguerLogo"
            viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
