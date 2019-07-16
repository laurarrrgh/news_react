import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <div className="ArticleCard">
        <h3 className="ArticleTitle">{article.title}</h3>
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
