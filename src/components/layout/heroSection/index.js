import React from "react";
import "./index.scss";

const HeroSection = () => {
  return (
    <div id="home">
      <div className="hero_main">
        <div className="hero_left">
          <div className="left_main">
            <h1>Next generation <br /> digital banking</h1>
            <p>
              Take your financial online. Your Easybank account  will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <div className="btn">
              <a href="#buton">
                <button className="btn_request">Request Invite</button>
              </a>
            </div>
          </div>
        </div>
        <div className="hero_right">
          <div className="img">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1663097221/easyBank/imageRight_uzqtyl.svg"
              alt="phones_backgound"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
