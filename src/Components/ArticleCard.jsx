import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <div className="ArticleCard">
        <Link className="ArticleTitle" to={`/article/${article.article_id}`}>
          {article.title}
        </Link>
        <p className="topic">r/{article.topic}</p>
        <p className="ArticleBody">{article.body}</p>
        <p className="Author">Posted by {article.author}</p>
        <p className="Comments">Number of comments: {article.comment_count}</p>
        <p className="Votes">Number of votes: {article.votes}</p>
        <p className="Created At">Posted at {article.created_at}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
