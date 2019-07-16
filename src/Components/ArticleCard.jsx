import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <div className="articleCard">
        <div className="ArticleCard">
          <h3 className="ArticleTitle">{article.title}</h3>
          <p className="ArticleBody">{article.body}</p>
          <p className="Author">{article.author}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
