import React from "react";
import { Link } from "@reach/router";
import "../CSS/ArticleCard.css";
import * as moment from "moment";

const ArticleCard = ({ article }) => {
  return (
    <div className="individualArticle">
      <div className="ArticleBox">
        <Link className="ArticleTitle" to={`/article/${article.article_id}`}>
          {article.title}
        </Link>
        <p className="topic">r/{article.topic}</p>
        <div className="details">
          <p className="author">Posted by: {article.author}</p>
          <p className="time">
            Posted at: {moment(article.created_at).format("DD-MM-YYYY hh:mm")}
          </p>
          <Link className="comments" to={`/article/${article.article_id}`}>
            Comments: {article.comment_count}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
