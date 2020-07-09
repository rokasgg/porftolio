import React, { Component } from "react";

class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      items: ["vienas", "du", "trys", "keturi"],
    };
  }
  componentDidMount() {
    console.log("Component About has mounted");
  }
  componentWillUnmount() {
    console.log("Component About has unmounted");
  }
  render() {
    return (
      <div className="about-layout" style={{ backgroundColor: "lightblue" }}>
        <div className="lovable-list-slider">
          <div className="lovable-list-wrapper">
            {this.state.items.map((item) => {
              return <div className="lovable-list-item">{item}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default SecondPage;
