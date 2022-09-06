import React from "react";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home"><img
          src="https://res.cloudinary.com/ron2021/image/upload/v1662480593/easyBank/logo_hzpd2a.svg"
          alt="easy_bank_logo"
        /></a>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#home">about</a>
          </li>
          <li>
            <a href="#home">contact</a>
          </li>
          <li>
            <a href="#home">blog</a>
          </li>
          <li>
            <a href="#home">carrers</a>
          </li>
        </ul>
      </div>
      <div className="navButton">
        <a href="#button">
          <button>request invite</button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
