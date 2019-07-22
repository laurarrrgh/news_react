import React, { Component } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Articles from "./Components/Articles.jsx";
// import Article from "./Components/ArticleCard.jsx";
import PostComment from "./Components/PostComment";
import SingleArticle from "./Components/SingleArticle";
import Error from "./Components/Error";
import "./CSS/App.css";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <Router className="router" primary={false}>
          <Articles path="/" />
          <Articles path="/:topic" />
          <PostComment path="/article/:article_id/post" />
          <SingleArticle path="/article/:article_id" />
          <Error default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
