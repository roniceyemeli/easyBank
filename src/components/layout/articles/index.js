import React from "react";
import "./index.scss";

const ArticleSection = () => {
  return (
    <div id="articles">
      <div className="main_article">
        <h2>Latest Articles</h2>
        <div className="articles_boxes">
          <div className="article_box">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480599/easyBank/image-currency_lyn5rz.jpg"
              alt="article_money"
            />
            <div className="article_box_bottom">
              <p>By Claire Robinson</p>
              <p>
                Receive money in any <br /> currency with no fees
              </p>
              <p>
                The world is getting smaller and <br /> we're becomming more
                mobile. So <br /> why should you be forced to only <br />{" "}
                receive money in a single ...
              </p>
            </div>
          </div>
          <div className="article_box">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480592/easyBank/image-restaurant_dij24u.jpg"
              alt="restaurant_image"
            />
            <div className="article_box_bottom">
              <p>By Wilson Hutton</p>
              <p>Treat yourself without 
                <br /> worrying about money
              </p>
              <p>
              Our simple budgeting feature <br /> allows you to separate at your <br /> spending and set realistic limits <br />
                each month.That means you ...
              </p>
            </div>
          </div>
          <div className="article_box">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480603/easyBank/image-plane_ui5ymu.jpg"
              alt="aircraft_wing_image"
            />
            <div className="article_box_bottom">
              <p>By Wilson Hutton</p>
              <p>
                Take your Easybank card<br /> wherever you go
              </p>
              <p>
                We want you to enjoy ypur travels.<br /> This is why we don't charge any<br />fees on purchases while you're<br />
                abroad. We'll even show you...
              </p>
            </div>
          </div>
          <div className="article_box">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480589/easyBank/image-confetti_utpr3c.jpg"
              alt="light_image"
            />
            <div className="article_box_bottom">
              <p>By Claire Robinson</p>
              <p>
                Our invite-only Beta<br /> accounts are now live!
              </p>
              <p>
                After a lot of hard work by the<br />whole team, we're excited to launch<br /> our closed beta. It's easy to request<br />
                an invite through the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
