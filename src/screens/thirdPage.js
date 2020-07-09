import React, { Component } from "react";

class ThirdPage extends Component {
  componentDidMount() {
    console.log("Component Skills has mounted");
  }
  componentWillUnmount() {
    console.log("Component Skills has unmounted");
  }

  render() {
    return (
      <div>
        <header
          className="page-layout"
          style={{ backgroundColor: "lightpink" }}
        >
          Third Page
        </header>
      </div>
    );
  }
}
export default ThirdPage;
