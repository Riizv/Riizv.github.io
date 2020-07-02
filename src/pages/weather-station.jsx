import React from "react";

import base from "../firebase/base";

import { FaTemperatureHigh } from "react-icons/fa";
import { FiCloudDrizzle } from "react-icons/fi";

export default class WeatherStation extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    base.fetch("weather-station", {
      context: this,
      then(data) {
        // console.log(data);
        this.setState({
          data,
        });
      },
    });
    // console.log("DATA", this.state.data);
  }

  render() {
    return (
      <div>
        <p>
          <FaTemperatureHigh /> Temperature:{" "}
          <b>{this.state.data.temperature}</b>
        </p>
        <p>
          <FiCloudDrizzle /> Humidity: <b>{this.state.data.humidity}</b>
        </p>
      </div>
    );
  }
}
