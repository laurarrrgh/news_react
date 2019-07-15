import React, { Component } from "react";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Nav from "./Components/Nav.jsx";
import Articles from "./Components/Articles.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header className="header">Header</Header>
        <Nav className="nav">Nav</Nav>
        <Articles className="articles">Articles</Articles>
        <Footer className="footer">Footer</Footer>
      </div>
    );
  }
}

export default App;
