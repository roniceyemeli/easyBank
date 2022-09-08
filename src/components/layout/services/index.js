import React from "react";
import "./index.scss";

const Services = () => {
  return (
    <div id="services">
      <div className="services-head">
        <h2>Why choose Easybank</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub.
          <br />
          Control your finances like never before
        </p>
      </div>
      <div className="services-boxes">
        <div className="services-boxe">
            <img src="https://res.cloudinary.com/ron2021/image/upload/v1662480599/easyBank/icon-online_vl1x0p.svg" alt="cheque" />
            <h3>Online Banking</h3>
            <p>Our modern web and mobile <br/> applications allow you to keep <br/> track of your finances wherever you <br/> are in the world.</p>
        </div>
        <div className="services-boxe">
            <img src="https://res.cloudinary.com/ron2021/image/upload/v1662480593/easyBank/icon-budgeting_hhnrrs.svg" alt="money" />
            <h3>Simple Budgeting</h3>
            <p>See exactly where your money<br/> goes each month. Receive<br/> notifications when your're close to  <br/> hitting your limits.</p>
        </div>
        <div className="services-boxe">
            <img src="https://res.cloudinary.com/ron2021/image/upload/v1662480593/easyBank/icon-budgeting_hhnrrs.svg" alt="money" />
            <h3>Fast Onboarding</h3>
            <p>Our modern web and mobile <br/> applications allow you to keep <br/> track of your finances wherever you <br/> are in the world.</p>
        </div>
        <div className="services-boxe">
            <img src="https://res.cloudinary.com/ron2021/image/upload/v1662480593/easyBank/icon-budgeting_hhnrrs.svg" alt="money" />
            <h3>Open Api</h3>
            <p>Manage your saving,investments, <br/> pension, and much more from one <br/> account. Tracking your money has <br/> never been easier.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
