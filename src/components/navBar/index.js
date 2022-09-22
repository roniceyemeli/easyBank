import React from "react";
import "./index.scss";
import {IoIosMenu, IoIosClose} from 'react-icons/io'

const NavBar = ({menuOpen, setMenuOpen}) => {
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
            <a href="#home">careers</a>
          </li>
        </ul>
      </div>
      <div className="navButton">
        <a href="#button">
          <button className="btn_request">request invite</button>
        </a>
      </div>
      <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
        {
          menuOpen ? <IoIosClose style={{fontSize:'2rem'}}/> : <IoIosMenu style={{fontSize:'2rem'}}/>
        }
      </div>
    </div>
  );
};

export default NavBar;
