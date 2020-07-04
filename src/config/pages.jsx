import React from "react";

import OpacityTwoToneIcon from "@material-ui/icons/OpacityTwoTone";
import { FaTemperatureHigh } from "react-icons/fa";

export const pages = [
  {
    name: "Weather Station",
    path: "/weather-station",
    icon: <OpacityTwoToneIcon />,
  },
  {
    name: "Position",
    path: "/position",
    icon: <FaTemperatureHigh />,
  },
];
