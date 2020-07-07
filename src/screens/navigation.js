import React, { Component } from "react";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-field">
        <div className="nav-list">
          <div className="nav-item">Home</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Skills</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
    );
  }
}
