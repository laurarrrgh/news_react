import React from "react";
import { Link } from "@reach/router";
// import "../CSS/SingleArticle.css";
import "../CSS/ArticleCard.css";
import * as moment from "moment";

const ArticleCard = ({ article }) => {
  return (
    <div className="individualArticle">
      <div className="ArticleCard">
        <Link className="ArticleTitle" to={`/article/${article.article_id}`}>
          {article.title}
        </Link>
        <p className="topic">r/{article.topic}</p>
        {/* <p className="ArticleBody">{article.body}</p> */}
        <Link className="comments" to={`/article/${article.article_id}`}>
          Number of comments: {article.comment_count}
        </Link>
        <small className="small">
          Posted by {article.author}
          Number of votes: {article.votes}
          Posted at:{moment(article.created_at).format("DD-MM-YYYY hh:mm:ss")}
        </small>
      </div>
    </div>
  );
};

export default ArticleCard;
