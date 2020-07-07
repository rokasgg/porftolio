import React, { Component } from "react";

class FirstPage extends Component {
  componentDidMount() {
    console.log(
      "page width:",
      window.innerWidth,
      "page height:",
      window.innerHeight
    );
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="header-title">
            <img src={require("../assets/earth.gif")} className="earth-gif" />
            <p style={{ fontSize: 75 }} className="mainText">
              Hi, I'm Rokas Gegzna!
            </p>
            <p style={{ fontSize: 35 }} className="mainText">
              and I do Front-end developing
            </p>
          </div>
        </header>
      </div>
    );
  }
}
export default FirstPage;
