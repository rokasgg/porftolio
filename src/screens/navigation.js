import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-field">
        <div className="nav-list">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/skills" className="nav-item">
            Skills
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}
