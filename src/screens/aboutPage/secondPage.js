import React, { Component } from "react";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaFutbol,
  FaBeer,
  FaSkiing,
  FaCannabis,
} from "react-icons/fa";
import "./aboutCss.scss";
// import photosvg from "./photosvg.svg";
import PhotoSvg from "./svgFiles/photosvg";
import RealPhoto from "./svgFiles/realPhoto";
import BoxingGloves from "./svgFiles/boxingGloves";
import TraelSvg from "./svgFiles/travel";
import FoodSvg from "./svgFiles/food";
import NetflixSvg from "./svgFiles/netflix";
import FootballSvgs from "./svgFiles/football";
import SkiiSvg from "./svgFiles/ski";

const TESTDATA = [
  {
    context: "vienas",
    id: 0,
    type: function () {
      return <SkiiSvg />;
    },
  },
  {
    context: "du",
    id: 1,
    type: function () {
      return <FootballSvgs />;
    },
  },
  {
    context: "trys",
    id: 2,
    type: function () {
      return <BoxingGloves />;
    },
  },
  {
    context: "keturi",
    id: 3,
    type: function () {
      return <TraelSvg />;
    },
  },
  {
    context: "vienas",
    id: 4,
    type: function () {
      return <FoodSvg />;
    },
  },
  {
    context: "du",
    id: 5,
    type: function () {
      return <NetflixSvg />;
    },
  },
  {
    context: "vienas",
    id: 6,
    type: function () {
      return <SkiiSvg />;
    },
  },
  {
    context: "du",
    id: 7,
    type: function () {
      return <FootballSvgs />;
    },
  },
  {
    context: "trys",
    id: 8,
    type: function () {
      return <BoxingGloves />;
    },
  },
  {
    context: "keturi",
    id: 9,
    type: function () {
      return <TraelSvg />;
    },
  },
  {
    context: "vienas",
    id: 10,
    type: function () {
      return <FoodSvg />;
    },
  },
  {
    context: "du",
    id: 11,
    type: function () {
      return <NetflixSvg />;
    },
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
    // setInterval(() => {
    //   if (this.state.itemsList.length - 1 === this.state.item.id) {
    //     return this.setState({ item: TESTDATA[0] });
    //   }
    //   this.goToNextItem();
    // }, 3000);
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
      <div className="about-layout">
        <div className="box">
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
                    {item.type()}
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div className="lovable-list-button-wrapper">
            <div className="lovable-list-button" onClick={this.goToNextItem}>
              <FaArrowAltCircleRight />
            </div>
            <div
              className="lovable-list-button2"
              onClick={this.goToPreviousItem}
            >
              <FaArrowAltCircleLeft />
            </div>
          </div> */}
        </div>
        <div className=""></div>
      </div>
    );
  }
}
export default SecondPage;
