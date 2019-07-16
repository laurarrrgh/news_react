import React, { Component } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Articles from "./Components/Articles.jsx";
import Article from "./Components/ArticleCard.jsx";
import PostArticle from "./Components/PostArticle";
import "./CSS/App.css";
import { Router } from "@reach/router";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <Router className="router">
          <Articles path="/" />
          <Articles path="/articles/:topic" />
          <Article path="articles/:topic/:article_id" />
          <PostArticle path="/newArticle" />
        </Router>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

export default App;
