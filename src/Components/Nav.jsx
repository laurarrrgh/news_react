import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api.js";
import "../CSS/Nav.css";

class Nav extends Component {
  state = {
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div>
        <nav className="nav">
          <Link className="navLink" to="/">
            All Articles
          </Link>
          {topics.map(topic => (
            <Link className="navLink" key={topic.slug} to={`/${topic.slug}`}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </Link>
          ))}
        </nav>
      </div>
    );
  }
  componentDidMount() {
    this.fetchTopics();
  }
  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default Nav;
