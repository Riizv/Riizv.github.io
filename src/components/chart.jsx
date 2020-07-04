import React, { useState, useEffect } from "react";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
}));

const createData = (time, el) => ({ time, el });

const data = [
  createData("00:00", 0),
  createData("03:00", 0),
  createData("06:00", 0),
  createData("09:00", 0),
  createData("12:00", 0),
  createData("15:00", 0),
  createData("18:00", 0),
  createData("21:00", 0),
  createData("24:00", 0),
];

const Chart = ({ value }) => {
  const theme = useTheme();
  const classes = useStyles();

  const updateHistory = (newElement) => {
    data.shift();
    data.push(createData(new Date().getSeconds(), newElement));
  };

  useEffect(() => {
    updateHistory(value);
    return () => {
      updateHistory(value);
    };
  });

  return (
    <ResponsiveContainer>
      <LineChart data={data} className={classes.root}>
        <XAxis dataKey="time" />
        <YAxis stroke={theme.palette.text.secondary}></YAxis>
        <Line type="monotone" dataKey="el" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
