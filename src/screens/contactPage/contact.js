import React, { Component } from "react";
import "./contact.scss";
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
        <div className="card-border">
          <svg
            // width="300"
            // height="253"
            viewBox="0 15 155 253"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id="blood"
          >
            <path
              // id="blood"
              d="M152.5 174.775C152.5 217.232 118.922 250.5 77.5233 250.5C36.0517 250.5 1.06974 216.685 2.54514 174.863C2.60507 173.164 3.16291 170.795 4.25987 167.767C5.34356 164.776 6.89399 161.299 8.81333 157.436C12.6526 149.708 17.8822 140.602 23.5752 131.001C25.8943 127.09 28.2922 123.095 30.7009 119.081C40.0546 103.496 49.57 87.6417 55.2646 75.4135C66.6365 50.9942 72.939 32.077 76.3413 19.3208C76.6934 18.0008 77.0144 16.7466 77.3069 15.5587C77.796 17.9649 78.3757 20.6076 79.0578 23.4532C82.3638 37.2456 88.086 55.8554 97.5684 75.4472C106.772 94.4639 119.086 114.381 129.706 131.559C130.762 133.267 131.801 134.948 132.819 136.599C138.466 145.756 143.438 153.943 146.997 160.638C148.777 163.985 150.175 166.906 151.122 169.351C152.091 171.85 152.5 173.632 152.5 174.775Z"
              stroke="white"
              stroke-width="5"
            />
          </svg>
        </div>
      </div>
    );
  }
}
