import React from "react";
import { Icons } from "../Icons";
import "./index.scss";

const Footer = () => {
  return (
    <div id="footer">
      <div className="main_footer">
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
        <div className="footer_navlinks">
            <div className="footer_navlinks_list">
              <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
              <ul>
                <li>Careers</li>
                <li>Support</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
        </div>
        <div className="footer_details">
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
