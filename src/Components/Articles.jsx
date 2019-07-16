import React, { Component } from "react";
import * as api from "../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";
import "../CSS/ArticleCard.css";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    const { topic } = this.props;
    const { articles } = this.state;

    return (
      <div>
        <h2>{topic ? `Articles on ${topic}` : "All Articles"}</h2>
        <ul>
          {articles.map(article => {
            return <ArticleCard article={article} key={article.article_id} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }
  componentDidUpdate(prevProps, prevSate) {
    const newTopic = this.props.topic !== prevProps.topic;

    if (newTopic) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;

    if (topic === "undefined") {
      api.getArticles().then(articles => this.setState({ articles }));
    } else {
      api.getArticles(topic).then(articles => {
        this.setState({ articles });
      });
    }
  };

  // fetchArticlesByTopic = () => {

  // }
}

export default Articles;

// amended - not working
// import React, { Component } from "react";
// import * as api from "../utils/api.js";
// import ArticleCard from "./ArticleCard.jsx";

// class Articles extends Component {
//   state = {
//     articles: []
//   };

//   render() {
//     const articles = props => {
//       console.log(this.props);
//       // const { topic } = this.props;
//       // const { articles } = this.state;
//     };
//     return (
//       // <div>
//       //   <h2>{{ topic } ? `Articles on ${topic}` : "All Articles"}</h2>
//       // </div>
//       <ul>
//         {articles.map(article => {
//           <ArticleCard article={article} key={article.article_id} />;
//         })}
//       </ul>

//       // <ul>
//       //   {articles.map(article => {
//       //      <ArticleCard article={article} key={article.article_id} >
//       //   })}
//       // </ul>
//     );
//   }

//   componentDidMount() {
//     this.fetchArticles();
//   }
//   componentDidUpdate(prevProps, prevSate) {
//     const newTopic = this.props.topic !== prevProps.topic;

//     if (newTopic) this.fetchArticles();
//   }

//   fetchArticles = () => {
//     const { topic } = this.props;
//     api.getArticles().then(articles => {
//       this.setState({ articles });
//     });
//   };
// }

// export default Articles;
