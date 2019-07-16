import React, { Component } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Articles from "./Components/Articles.jsx";
import Article from "./Components/ArticleCard.jsx";
import PostArticle from "./Components/PostArticle";
import SingleArticle from "./Components/SingleArticle";
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
          <Articles path="/:topic" />
          <PostArticle path="/newArticle" />
          <SingleArticle path="/article/:article_id" />
        </Router>
        <Footer>Footer</Footer>
      </div>
    );
  }
}

export default App;
