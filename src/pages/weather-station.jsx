import React from "react";

import base from "../firebase/base";

import { FaTemperatureHigh } from "react-icons/fa";
import { FiCloudDrizzle } from "react-icons/fi";
import CircularProgress from "@material-ui/core/CircularProgress";

import FloatingBackButton from "../components/fab";

class WeatherStation extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    this.ref = base.listenTo("weather-station", {
      context: this,
      then(data) {
        // console.log(data);
        this.setState({
          data,
          isLoading: false,
        });
      },
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <div>
            <p>
              <FaTemperatureHigh /> Temperature:{" "}
              <b>{this.state.data.temperature}</b>
            </p>
            <p>
              <FiCloudDrizzle /> Humidity: <b>{this.state.data.humidity}</b>
            </p>
          </div>
        )}
        <FloatingBackButton />
      </>
    );
  }
}
export default WeatherStation;
