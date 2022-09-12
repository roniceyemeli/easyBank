import React from "react";
import { Icons } from "../Icons";
import "./index.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="main_footer">
        <div className="footer_left">
          <div className="footer_links">
            <a href="#home">
              <img
                src="https://res.cloudinary.com/ron2021/image/upload/v1662928129/easyBank/Group_sisxl2.svg"
                alt="easy_bank_logo"
              />
            </a>
            <div className="social_media">
              <Icons.GrFacebook />
              <Icons.GrYoutube />
              <Icons.GrTwitter />
              <Icons.GrPinterest />
              <Icons.GrInstagram />
            </div>
          </div>
            <ul>
              <li><a href="#home">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
            <ul>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#privacyPolicy">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer_right">
          <a href="#button">
            <button className="btn_request">request invite</button>
          </a>
          <p>Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
