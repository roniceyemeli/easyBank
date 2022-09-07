import React from "react";
import "./index.scss";

const HeroSection = () => {
  return (
    <div>
      <div className="hero_main">
        <div className="hero_left">
          <div className="left_main">
            <h1>Next generation digital banking</h1>
            <p>
              Take your financial online. Your Easybank account will be a
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
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480592/easyBank/bg-intro-desktop_kmmult.svg"
              alt="phones_backgound"
            />
            <img src="https://res.cloudinary.com/ron2021/image/upload/v1662480592/easyBank/image-mockups_ynaj4f.png" alt="phones" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
