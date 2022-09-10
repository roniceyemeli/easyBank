import React from "react";
import "./index.scss";

const ArticleSection = () => {
  return (
    <div id="articles">
      <div className="main_article">
        <h2>Latest Articles</h2>
        <div className="articles_boxes">
          <div className="article_article">
            <img
              src="https://res.cloudinary.com/ron2021/image/upload/v1662480599/easyBank/image-currency_lyn5rz.jpg"
              alt="article_money"
            />
            <div className="article_article_bottom">
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
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
