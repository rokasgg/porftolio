import React, { Component } from "react";

export default class ContactScreen extends Component {
  componentDidMount() {
    console.log("Component Contact has mounted");
  }
  componentWillUnmount() {
    console.log("Component Contact has unmounted");
  }

  render() {
    return (
      <div className="contact-field">
        <header className="page-layout" style={{ backgroundColor: "#FFB319" }}>
          Contact Page
        </header>
      </div>
    );
  }
}
