import React from "react";
import Logo from "../static/dogecoinLogo.png";
import "../styles/header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logoContainer">
          <img src={Logo} alt="dogecoing image" className="header__logoImage" />
          <spam className="header__logoTitle">DOGECOIN</spam>
        </div>
        <div className="header__menuBurguerContainer">
          <spam className="header__menuBurguerTitle">MENÚ</spam>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="heaeder__menuBurguerLogo"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
