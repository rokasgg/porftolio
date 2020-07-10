import React, { Component } from "react";
import {
  FaBeer,
  FaAlignLeft,
  FaArrowAltCircleLeft,
  FaArrowRight,
  FaArrowAltCircleRight,
} from "react-icons/fa";
const TESTDATA = [
  {
    context: "vienas",
    id: 0,
  },
  {
    context: "du",
    id: 1,
  },
  {
    context: "trys",
    id: 2,
  },
  {
    context: "keturi",
    id: 3,
  },
];
class SecondPage extends Component {
  constructor() {
    super();
    this.state = {
      itemsList: TESTDATA,
      item: TESTDATA[0],
    };
  }
  componentDidMount() {
    console.log("Component About has mounted");
    setInterval(() => {
      if (this.state.itemsList.length - 1 === this.state.item.id) {
        return this.setState({ item: TESTDATA[0] });
      }
      this.goToNextItem();
    }, 3000);
  }
  componentWillUnmount() {
    console.log("Component About has unmounted");
  }
  goToPreviousItem = () => {
    console.log("HHHAHAH");
    if (this.state.item.id === 0) return null;
    const newIndex = this.state.item.id - 1;
    this.setState({ item: this.state.itemsList[newIndex] });
  };
  goToNextItem = () => {
    console.log("HHHAHAH");
    if (this.state.item.id === this.state.itemsList.length - 1) return null;
    const newIndex = this.state.item.id + 1;
    this.setState({ item: this.state.itemsList[newIndex] });
  };

  pressOnItem = (item) => {
    this.setState({ item: this.state.itemsList[item.id] });
  };

  render() {
    return (
      <div className="about-layout" style={{ backgroundColor: "cyan" }}>
        <div
          className={`lovable-list-slider active-slider-${this.state.item.id}`}
        >
          <div
            className="lovable-list-wrapper"
            style={{
              transform: `translateX(-${
                this.state.item.id * (100 / this.state.itemsList.length)
              }%)`,
            }}
          >
            {this.state.itemsList.map((item) => {
              return (
                <div
                  id={`lovable-list-item-${item.id}`}
                  className="lovable-list-item"
                  key={item.id}
                  onClick={() => this.pressOnItem(item)}
                >
                  {item.context}
                </div>
              );
            })}
          </div>
        </div>
        <div className="lovable-list-button-wrapper">
          <div className="lovable-list-button" onClick={this.goToNextItem}>
            {" "}
            <FaArrowAltCircleRight />
          </div>
          <div className="lovable-list-button2" onClick={this.goToPreviousItem}>
            {" "}
            <FaArrowAltCircleLeft />
          </div>
        </div>
      </div>
    );
  }
}
export default SecondPage;
