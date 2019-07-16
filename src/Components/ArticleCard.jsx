import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <div className="articleCard">
        <div>{article.title}</div>
      </div>
    </div>
  );
};

export default ArticleCard;

{
  /* <div className="minArticle-container">
<h3 className="title">{article.title}</h3>
<p className="article">{article.body}</p>
<h4 className="author">{`By: ${article.author}`}</h4>
<h4 className="comments">{`Comments: ${article.comment_count}`}</h4>
<h4 className="likes">{`Likes: ${article.votes}`}</h4>
</div> */
}
