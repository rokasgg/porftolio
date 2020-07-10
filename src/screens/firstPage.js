import React, { Component } from "react";

class FirstPage extends Component {
  componentDidMount() {
    console.log(
      "page width:",
      window.innerWidth,
      "page height:",
      window.innerHeight
    );
    console.log("Component home has mounted");
  }
  componentWillUnmount() {
    console.log("Component home has unmounted");
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="header-title">
            <div className="earth"></div>
            <img
              src={require("../assets/Oficial-Globe.gif")}
              className="earth-gif"
              alt='globe'
            />
            <p style={{ fontSize: 75 }} className="mainText">
              Hi, I'm Rokas!
            </p>
            <p style={{ fontSize: 35 }} className="mainText">
              I do Front-end developing
            </p>
          </div>
        </header>
      </div>
    );
  }
}
export default FirstPage;
