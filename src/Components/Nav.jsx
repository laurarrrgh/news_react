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
          <Link to="/">All Articles</Link>
          {topics.map(topic => (
            <Link key={topic.slug} Link to={`/articles/${topic.slug}`}>
              {topic.slug}
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
